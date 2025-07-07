import { motion } from "framer-motion";

function FormDisplayAnimation({ children }) {
  return (
    <>
      <motion.div
        // key={activeForm}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
      ;
    </>
  );
}

export default FormDisplayAnimation;
