export const Variants = {
  container: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },

  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },

  opacity: {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        delay: custom * 0.2,
        bounce: 0.4,
      },
    }),
    exit: { opacity: 0, x: -0, y: 20 },
  },

  fade: {
    hidden: { x: 0, y: 20 },
    enter: {
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
      },
    },
    exit: { x: -0, y: 20 },
  },
};
