import React from "react";
import { Search, Bell, Calendar } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6">
      
      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 gap-2 w-full max-w-[420px]">
        <Search className="w-5 h-5 text-gray-400" />

        {/* Desktop input */}
        <input
          className="bg-transparent outline-none w-full text-sm hidden sm:block"
          placeholder="Search companies, tenders, or products..."
        />

        {/* Mobile placeholder */}
        <span className="text-sm text-gray-400 sm:hidden">
          Search…
        </span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 sm:gap-6 ml-4">
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Calendar className="w-5 h-5 text-gray-500 cursor-pointer" />

        {/* Hide region on small screens */}
        <span className="text-sm text-gray-600 hidden md:block">
          North Region (NR)
        </span>

        {/* CTA */}
        <button to="/login" className="bg-[#0b2a4a] text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm whitespace-nowrap">
          Login
          <span className="hidden sm:inline"> / Register</span>
        </button>
      </div>
    </header>
  );
}
