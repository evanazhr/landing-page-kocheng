// src/directives/v-scroll-reveal.js
export default {
  mounted(el, binding) {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      animationClass: 'animate-fade-in-up',
    }

    const options = {
      ...defaultOptions,
      ...(binding.value || {}),
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(options.animationClass) // ✅ fixed
          observer.unobserve(el)
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      },
    )

    el.classList.add('opacity-0')
    observer.observe(el)
  },
}
