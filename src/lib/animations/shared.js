// Transition presets
export const transitions = {
  default: {
    duration: 0.3,
    ease: "easeInOut",
  },
  spring: {
    type: "spring",
    stiffness: 70,
    damping: 20,
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
  smooth: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
};

// Delay presets
export const delays = {
  short: 0.2,
  medium: 0.6,
  long: 1.2,
};

// Stagger presets
export const staggers = {
  fast: 0.1,
  medium: 0.2,
  slow: 0.3,
};

// Utility function to create delayed variants
export const createDelayedVariant = (variant, delay = 0, duration = 0.3) => ({
  ...variant,
  visible: {
    ...variant.visible,
    transition: {
      delay,
      duration,
      ...(variant.visible?.transition || {}),
    },
  },
});

// Utility function to create staggered variants
export const createStaggeredVariant = (variant, staggerAmount) => ({
  ...variant,
  visible: {
    ...variant.visible,
    transition: {
      ...variant.visible.transition,
      staggerChildren: staggerAmount,
    },
  },
});

// Utility function to create a container with staggered children
export const createStaggerContainer = (
  staggerAmount,
  delayChildren = 0,
  delay = 0,
) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerAmount,
      delayChildren,
      when: "beforeChildren",
      delay,
    },
  },
});

// Utility function to combine multiple variants
export const combineVariants = (...variants) => ({
  hidden: {
    ...variants.reduce((acc, variant) => ({ ...acc, ...variant.hidden }), {}),
  },
  visible: {
    ...variants.reduce((acc, variant) => ({ ...acc, ...variant.visible }), {}),
  },
});

// Utility function to create a spring animation
export const createSpringVariant = (
  properties,
  stiffness = 70,
  damping = 20,
) => ({
  hidden: {
    ...Object.fromEntries(Object.keys(properties).map((key) => [key, 0])),
    opacity: 0,
  },
  visible: {
    ...properties,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness,
      damping,
    },
  },
});
// Utility function to create a staggered child with delay
export const createStaggeredChild = (variant, index, staggerAmount = 0.1) => ({
  ...variant,
  visible: {
    ...variant.visible,
    transition: {
      ...variant.visible.transition,
      delay: index * staggerAmount,
    },
  },
});
