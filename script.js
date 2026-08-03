document.addEventListener('DOMContentLoaded', function () {
  try {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const images = document.querySelectorAll('#fright .images img');
    const featuredSection = document.querySelector('#featured');

    if (typeof gsap !== 'undefined' && images.length) {
      const mergeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: featuredSection,
          start: 'top 80%',
          once: true,
        },
      });

      images.forEach((img, index) => {
        const offsetX = index % 2 === 0 ? -24 : 24;
        const offsetY = index < 2 ? -18 : 18;

        mergeTimeline.fromTo(
          img,
          {
            opacity: 0,
            x: offsetX,
            y: offsetY,
            scale: 1.08,
            filter: 'blur(10px)',
          },
          {
            opacity: index === 0 ? 1 : 0.8,
            x: 0,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
          },
          index * 0.12
        );
      });
    }
  } catch (e) {
    console.error('Error initializing animations:', e);
  }
});