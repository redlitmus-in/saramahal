/**
 * This script handles the scroll reveal animations
 */

export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      // Add the active class when the element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, {
    root: null, // using the viewport
    threshold: 0.1, // trigger when at least 10% of the element is visible
    rootMargin: '-50px' // trigger 50px before the element enters the viewport
  });

  // Observe all elements with the reveal-on-scroll class
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    // Cleanup function to disconnect the observer
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
    observer.disconnect();
  };
};

// Function to initialize the scroll animations
export const setupScrollAnimations = () => {
  // Run the init function when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
};

export default setupScrollAnimations; 