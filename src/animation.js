export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, staggerChildren: 0.5 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
};
