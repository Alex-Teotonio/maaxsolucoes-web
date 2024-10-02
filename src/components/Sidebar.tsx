import React, { useState } from "react";
import Link from "next/link";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

interface SidebarProps {
  menuItems: { label: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex h-screen w-64 bg-gray-800 text-white p-6 hidden md:block">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="text-lg font-medium hover:bg-gray-700 p-2 block rounded"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between p-4 z-50">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <DrawingPinFilledIcon />
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 p-6 md:hidden">
          <button
            className="text-2xl focus:outline-none mb-4"
            onClick={() => setIsOpen(false)}
          ></button>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-lg font-medium hover:bg-gray-700 p-2 block rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
