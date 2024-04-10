import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const GlowingButton = ({ text }) => {
  return (
    <div className="">
      <motion.button
        whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)" }}
        className="text-zinc-500 bg-transparent border border-zinc-500 hover:bg-neon-blue hover:text-white px-4 py-2 rounded-2xl transition duration-150"
      >
        {text}
      </motion.button>
    </div>
  );
};

GlowingButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default GlowingButton;
