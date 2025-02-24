import React from "react";
import { motion } from "framer-motion";
import { Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-800 py-6">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-indigo-200/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} QUBIQ. designed and developed by team SE-58 at IIT.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-indigo-200/60 hover:text-indigo-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram fontSize="medium" />
            </motion.a>
            <motion.a
              href="#"
              className="text-indigo-200/60 hover:text-indigo-200 transition"
              whileHover={{ scale: 1.1 }}
            >
              <LinkedIn fontSize="medium" />
            </motion.a>
            <a href="https://storyset.com/online" className="text-white text-xs pt-1.5">Illustrations by Storyset</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
