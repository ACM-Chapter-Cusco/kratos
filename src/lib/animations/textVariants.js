export var titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      delay: 0.5,
    },
  },
};

export var contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const extendVariant = (baseVariant, extension) => {
  return {
    ...baseVariant,
    ...extension,
    visible: {
      ...baseVariant.visible,
      ...(extension.visible || {}),
      transition: {
        ...(baseVariant.visible?.transition || {}),
        ...(extension.visible?.transition || {}),
      },
    },
    hidden: {
      ...baseVariant.hidden,
      ...(extension.hidden || {}),
      transition: {
        ...(baseVariant.hidden?.transition || {}),
        ...(extension.hidden?.transition || {}),
      },
    },
  };
};
