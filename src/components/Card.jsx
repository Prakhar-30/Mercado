import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  const cardStyle = {
    width: '30vw', // 40% of viewport width
    height: '80vh', // 60% of viewport height
    maxWidth: '600px', // Maximum width
    maxHeight: '600px', // Maximum height
  };

  return (
    <motion.div
      style={cardStyle}
      className="bg-zinc-700 shadow-lg border rounded-xl p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 5, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Card content here */}
      <h2 className="text-lg font-semibold mb-2">Card Title</h2>
      <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </motion.div>
  );
};

export default Card;
