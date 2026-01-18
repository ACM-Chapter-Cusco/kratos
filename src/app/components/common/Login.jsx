"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth/AuthContext";

const Login = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login({ username, password });

    if (result.success) {
      onLoginSuccess(result.member);
      onClose();
      setUsername("");
      setPassword("");
    } else {
      setError(result.error);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative bg-blue-git border-2 border-white-blue rounded-3xl p-8 w-[90%] max-w-md mx-4"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white-blue hover:text-blue transition-colors"
          >
            <IoClose className="text-2xl" />
          </button>

          {/* Title */}
          <h2 className="text-white-blue text-2xl font-bold mb-6 text-center">
            Member Login
          </h2>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-transparent border-2 border-white-blue text-white-blue placeholder-white-blue/70 focus:border-blue focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-transparent border-2 border-white-blue text-white-blue placeholder-white-blue/70 focus:border-blue focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="text-white-blue text-sm text-center font-medium">
                {error}
              </div>
            )}

            {/* Login button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue hover:bg-blue/80 text-blue-git font-bold py-3 rounded-xl transition-colors disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Login;
