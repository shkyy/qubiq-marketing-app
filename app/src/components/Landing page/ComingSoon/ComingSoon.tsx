import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // If using React Router

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800 text-center">
      {/* Animated "Coming Soon" Text */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-pink-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Coming Soon...
      </motion.h1>

      {/* Subtle Floating Animation */}
      <motion.p
        className="mt-4 text-lg text-indigo-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Stay tuned for something amazing!
      </motion.p>

      {/* Cool Glowing Effect on Button */}
      <motion.div
        className="mt-6"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/contact">
        <Button
            variant='outlined'
            sx={{
              borderColor: 'oklch(65.9% 0.15 292.39)',
              color: 'oklch(65.9% 0.15 292.39)',
              border: 2,
              borderRadius: "6px",
              height: '42px',
              margin: '1px',
              marginLeft: 7.5,
              fontSize: 13,
              transition: 'all 0.3s ease-in-out',
              "&:hover": {
                background: 'linear-gradient(90deg, oklch(65.9% 0.15 292.39) 20%, oklch(70% 0.12 278.39) 90%)',
                color: 'white',
                boxShadow: '0px 4px 12px rgba(150, 100, 180, 0.4)',
                transform: 'scale(1.07)',
              }
            }}
          > 
            Contact Us
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
