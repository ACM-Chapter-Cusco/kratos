"use client";

import { useState } from "react";
import { FiUser, FiLogOut, FiChevronDown } from "react-icons/fi";
import { apiClient } from "@/lib/api/apiClient";

const UserMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await apiClient.logout();
      onLogout();
      setIsOpen(false);
    } catch (error) {
      // If API fails, still logout locally
      onLogout();
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue/20 border border-white-blue/30 hover:bg-blue/30 transition-colors"
      >
        <FiUser className="text-white-blue text-lg" />
        <span className="text-white-blue font-medium">{user.id}</span>
        <FiChevronDown className="text-white-blue text-sm" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-blue-git border border-white-blue/30 rounded-xl shadow-lg min-w-[120px]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-white-blue hover:bg-blue/20 rounded-xl transition-colors"
          >
            <FiLogOut className="text-sm" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
