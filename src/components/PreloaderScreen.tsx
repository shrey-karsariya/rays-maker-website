import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import raysLogo from "@/assets/rays-logo-transparent.png";

export function PreloaderScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setVisible(false), 500);
      }
      setProgress(Math.min(current, 100));
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.img
              src={raysLogo}
              alt="Rays Maker"
              className="w-28 h-28 object-contain"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="flex flex-col items-center gap-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Best Never Lies
              </motion.p>
            </div>
          </motion.div>

          {/* Progress bar below logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-2.5 w-52"
          >
            {/* Track */}
            <div className="w-full h-[3px] rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #111439, #c6a364)",
                  transition: "width 0.12s linear",
                }}
              />
            </div>
            {/* Percent */}
            <span
              className="text-[10px] tabular-nums text-gray-400 tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {Math.round(progress)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
