import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mobile detection utility
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Performance utilities
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  return (...args: Parameters<T>) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Lazy image loading utility
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  fallbackSrc?: string
) => {
  const loadImage = () => {
    const imageLoader = new Image();
    
    imageLoader.onload = () => {
      img.src = src;
      img.classList.add('loaded');
      img.classList.remove('loading');
    };
    
    imageLoader.onerror = () => {
      if (fallbackSrc) {
        img.src = fallbackSrc;
      }
      img.classList.add('error');
      img.classList.remove('loading');
    };
    
    img.classList.add('loading');
    imageLoader.src = src;
  };
  
  // Use Intersection Observer for better performance
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer?.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '100px' }
  );
  
  if (observer) {
    observer.observe(img);
  } else {
    // Fallback for browsers without Intersection Observer
    loadImage();
  }
  
  return observer;
};

// Optimized image URL generator with WebP support
export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  height?: number,
  quality: number = 80
) => {
  // Check if browser supports WebP
  const supportsWebP = (() => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  })();
  
  // For external images (like Unsplash), optimize parameters
  if (src.includes('unsplash.com')) {
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    if (supportsWebP) params.set('fm', 'webp');
    params.set('fit', 'crop');
    params.set('crop', 'faces');
    
    return `${src}&${params.toString()}`;
  }
  
  // For local images, return as-is (should be optimized during build)
  return src;
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    fn();
    return;
  }
  
  const start = performance.now();
  fn();
  const end = performance.now();
  
  console.debug(`${name} took ${end - start} milliseconds`);
};

// Memory usage monitoring (for development)
export const getMemoryUsage = () => {
  if (typeof window === 'undefined' || !('performance' in window) || !(window.performance as any).memory) {
    return null;
  }
  
  const memory = (window.performance as any).memory;
  return {
    used: Math.round(memory.usedJSHeapSize / 1048576), // MB
    total: Math.round(memory.totalJSHeapSize / 1048576), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
  };
};

// Viewport utilities for mobile responsiveness
export const getViewportSize = () => {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

export const isPortrait = () => {
  const { width, height } = getViewportSize();
  return height > width;
};

// Touch device detection
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Safe area insets for mobile devices with notches
export const getSafeAreaInsets = () => {
  if (typeof window === 'undefined' || !CSS.supports('padding', 'env(safe-area-inset-top)')) {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  
  const computedStyle = getComputedStyle(document.documentElement);
  return {
    top: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-top)') || '0'),
    right: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-right)') || '0'),
    bottom: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-bottom)') || '0'),
    left: parseInt(computedStyle.getPropertyValue('env(safe-area-inset-left)') || '0')
  };
};

// Image loading states for better UX
export type ImageLoadingState = 'loading' | 'loaded' | 'error';

export const createImageLoadingManager = () => {
  const loadingStates = new Map<string, ImageLoadingState>();
  const listeners = new Map<string, Set<(state: ImageLoadingState) => void>>();
  
  return {
    getState: (src: string): ImageLoadingState => loadingStates.get(src) || 'loading',
    
    setState: (src: string, state: ImageLoadingState) => {
      loadingStates.set(src, state);
      const srcListeners = listeners.get(src);
      if (srcListeners) {
        srcListeners.forEach(listener => listener(state));
      }
    },
    
    subscribe: (src: string, listener: (state: ImageLoadingState) => void) => {
      if (!listeners.has(src)) {
        listeners.set(src, new Set());
      }
      listeners.get(src)!.add(listener);
      
      // Return unsubscribe function
      return () => {
        const srcListeners = listeners.get(src);
        if (srcListeners) {
          srcListeners.delete(listener);
          if (srcListeners.size === 0) {
            listeners.delete(src);
          }
        }
      };
    },
    
    clear: () => {
      loadingStates.clear();
      listeners.clear();
    }
  };
};

// Global image loading manager instance
export const imageLoadingManager = createImageLoadingManager(); 