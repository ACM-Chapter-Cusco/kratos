// Fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInDuration = (duration = 0.3) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration } },
});

// Slide up
export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const slideUpDuration = (duration = 0.3) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration } },
});

// Slide down
export const slideDown = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const slideDownDuration = (duration = 0.3) => ({
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration } },
});

// Slide left
export const slideLeft = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const slideLeftDuration = (duration = 0.3) => ({
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration } },
});

// Slide right
export const slideRight = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const slideRightDuration = (duration = 0.3) => ({
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration } },
});

// Scale up
export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export const scaleUpDuration = (duration = 0.3) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration } },
});

// Spring up
export const springUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

export const springDown = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

export const springLeft = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

export const springRight = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
