import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-12-31T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / 1000 / 60) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-800 flex flex-col items-center justify-center h-screen text-center p-6 text-white relative">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Something Awesome is Coming Soon!
      </motion.h1>
      <p className="text-gray-300 max-w-2xl mb-6">
        We are working hard to bring you an amazing experience. Stay tuned and
        be the first to know when we launch.
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="bg-purple-600 text-white p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{days}</p>
          <p className="text-sm">Days</p>
        </div>
        <div className="bg-purple-600 text-white p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{hours}</p>
          <p className="text-sm">Hours</p>
        </div>
        <div className="bg-purple-600 text-white p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{minutes}</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="bg-purple-600 text-white p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{seconds}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <TextField 
          variant="outlined" 
          placeholder="Enter your email"
          className="bg-white rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '6px',
            },
            '& .MuiInputBase-input': {
              fontSize: 14,
              padding: '10px',
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: "oklch(60.12% 0.1 292.39)",
            borderRadius: "6px",
            height: "40px",
            transition: "0.3s",
            '&:hover': {
              background: "oklch(70% 0.12 292.39)",
              transform: "scale(1.05)",
            },
          }}
        >
          Notify Me
        </Button>
      </div>
      <p className="mt-4 text-purple-300">Stay tuned for updates!</p>
    </section>
  );
};

export default ComingSoon;