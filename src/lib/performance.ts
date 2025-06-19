// Performance monitoring and optimization utilities
import { debounce, throttle, isMobile, prefersReducedMotion } from './utils';

// Performance metrics tracking
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
  memoryUsage?: {
    used: number;
    total: number;
    limit: number;
  };
  connectionType?: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

// Core Web Vitals tracking
export class WebVitalsTracker {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initTracking();
  }

  private initTracking() {
    // Track Largest Contentful Paint (LCP)
    this.trackLCP();
    
    // Track First Input Delay (FID)
    this.trackFID();
    
    // Track Cumulative Layout Shift (CLS)
    this.trackCLS();
    
    // Track Time to First Byte (TTFB)
    this.trackTTFB();
    
    // Device and connection info
    this.trackDeviceInfo();
  }

  private trackLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.debug('LCP:', lastEntry.startTime);
        this.metrics.renderTime = lastEntry.startTime;
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    }
  }

  private trackFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.debug('FID:', entry.processingStart - entry.startTime);
          this.metrics.interactionTime = entry.processingStart - entry.startTime;
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    }
  }

  private trackCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.debug('CLS:', clsValue);
          }
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  private trackTTFB() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart;
        console.debug('TTFB:', ttfb);
        this.metrics.loadTime = ttfb;
      }
    }
  }

  private trackDeviceInfo() {
    this.metrics.deviceType = isMobile() ? 'mobile' : 
                              window.innerWidth < 1024 ? 'tablet' : 'desktop';
    
    // Network information (if available)
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      this.metrics.connectionType = connection.effectiveType;
    }
  }

  public getMetrics(): PerformanceMetrics {
    return this.metrics as PerformanceMetrics;
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Image optimization and lazy loading
export class ImageOptimizer {
  private loadedImages = new Set<string>();
  private failedImages = new Set<string>();
  
  public async preloadCriticalImages(urls: string[]): Promise<void> {
    if (!isMobile()) {
      // Only preload on non-mobile devices
      const promises = urls.map(url => this.preloadImage(url));
      await Promise.allSettled(promises);
    }
  }

  private preloadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedImages.has(url)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        this.loadedImages.add(url);
        resolve();
      };
      img.onerror = () => {
        this.failedImages.add(url);
        reject(new Error(`Failed to load image: ${url}`));
      };
      img.src = url;
    });
  }

  public isImageLoaded(url: string): boolean {
    return this.loadedImages.has(url);
  }

  public hasImageFailed(url: string): boolean {
    return this.failedImages.has(url);
  }
}

// Animation performance optimizer
export class AnimationOptimizer {
  private animationFrameId: number | null = null;
  private isReducedMotion: boolean;

  constructor() {
    this.isReducedMotion = prefersReducedMotion();
    
    // Listen for reduced motion preference changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', (e) => {
        this.isReducedMotion = e.matches;
      });
    }
  }

  public shouldAnimate(): boolean {
    return !this.isReducedMotion && !isMobile();
  }

  public optimizeAnimation(callback: () => void): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    if (this.shouldAnimate()) {
      this.animationFrameId = requestAnimationFrame(callback);
    } else {
      // Run immediately without animation for reduced motion or mobile
      callback();
    }
  }

  public cleanup(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}

// Mobile-specific optimizations
export class MobileOptimizer {
  private touchStartTime: number = 0;
  private scrollTimeout: NodeJS.Timeout | null = null;

  constructor() {
    this.initTouchOptimizations();
    this.initScrollOptimizations();
  }

  private initTouchOptimizations(): void {
    if (!isMobile()) return;

    // Optimize touch events
    document.addEventListener('touchstart', (e) => {
      this.touchStartTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const touchDuration = Date.now() - this.touchStartTime;
      
      // If touch was very quick, likely a tap
      if (touchDuration < 100) {
        // Add visual feedback for quick taps
        const target = e.target as HTMLElement;
        if (target && target.classList) {
          target.classList.add('tap-feedback');
          setTimeout(() => {
            target.classList.remove('tap-feedback');
          }, 150);
        }
      }
    }, { passive: true });
  }

  private initScrollOptimizations(): void {
    // Throttled scroll handler for performance
    const handleScroll = throttle(() => {
      // Clear any existing timeout
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      // Set body class while scrolling
      document.body.classList.add('is-scrolling');

      // Remove class after scrolling stops
      this.scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 150);
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  public addTouchFeedback(element: HTMLElement): void {
    if (!isMobile()) return;

    element.style.setProperty('--tap-highlight-color', 'rgba(0, 0, 0, 0.1)');
    element.style.WebkitTapHighlightColor = 'transparent';
    
    element.addEventListener('touchstart', () => {
      element.style.transform = 'scale(0.98)';
      element.style.transition = 'transform 0.1s ease';
    }, { passive: true });

    element.addEventListener('touchend', () => {
      setTimeout(() => {
        element.style.transform = '';
        element.style.transition = '';
      }, 100);
    }, { passive: true });
  }
}

// Main performance manager
export class PerformanceManager {
  private webVitals: WebVitalsTracker;
  private imageOptimizer: ImageOptimizer;
  private animationOptimizer: AnimationOptimizer;
  private mobileOptimizer: MobileOptimizer;

  constructor() {
    this.webVitals = new WebVitalsTracker();
    this.imageOptimizer = new ImageOptimizer();
    this.animationOptimizer = new AnimationOptimizer();
    this.mobileOptimizer = new MobileOptimizer();
  }

  public getMetrics(): PerformanceMetrics {
    return this.webVitals.getMetrics();
  }

  public optimizeImages(urls: string[]): Promise<void> {
    return this.imageOptimizer.preloadCriticalImages(urls);
  }

  public addTouchFeedback(element: HTMLElement): void {
    this.mobileOptimizer.addTouchFeedback(element);
  }

  public optimizeAnimation(callback: () => void): void {
    this.animationOptimizer.optimizeAnimation(callback);
  }

  public cleanup(): void {
    this.webVitals.cleanup();
    this.animationOptimizer.cleanup();
  }
}

// Global performance manager instance
export const performanceManager = new PerformanceManager();

// CSS classes for mobile optimizations
export const mobileOptimizationCSS = `
.tap-feedback {
  background: rgba(0, 0, 0, 0.1) !important;
  transform: scale(0.98) !important;
  transition: all 0.1s ease !important;
}

.is-scrolling {
  pointer-events: none;
}

.is-scrolling * {
  pointer-events: auto;
}

@media (max-width: 768px) {
  * {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  
  .animate-bounce,
  .animate-pulse,
  .animate-spin {
    animation-duration: 3s !important;
  }
  
  .reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  .animate-pulse,
  .animate-spin,
  .animate-ping {
    animation: none !important;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

// Inject CSS for mobile optimizations
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileOptimizationCSS;
  document.head.appendChild(style);
} 