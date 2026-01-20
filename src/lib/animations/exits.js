// Fade out
export const fadeOut = {
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Slide up exit
export const slideUpExit = {
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

// Slide down exit
export const slideDownExit = {
  visible: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

// Scale down exit
export const scaleDownExit = {
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};
