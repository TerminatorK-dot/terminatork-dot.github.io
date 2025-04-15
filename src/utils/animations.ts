
export function setupIntersectionObserver() {
  // Function to handle element visibility for animations
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  };

  // Create observer with options
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  // Create the observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Select all elements with the animation class and observe them
  const elements = document.querySelectorAll('.section-fade-in');
  elements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
}
