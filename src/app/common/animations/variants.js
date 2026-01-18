// Variantes básicas
export const basicVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Variantes para líneas
export const lineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

// Variantes para información con stagger
export const infoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 1.2,
    },
  },
};

// Variantes para títulos
export const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

// Variantes para texto y botones
export const textAndButtonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
      delayChildren: 1,
    },
  },
};

// Variantes para texto
export const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

// Variantes para botones
export const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 5,
    },
  },
};

// Variantes para imágenes
export const imageryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 3,
      staggerChildren: 0.5,
    },
  },
};

// Variantes para imágenes individuales
export const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
      duration: 0.7,
      ease: "easeOut",
    },
  },
}; 