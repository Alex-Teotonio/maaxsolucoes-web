import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

interface SidebarProps {
  menuItems: { label: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <>
      <div className="hidden md:flex h-screen w-64 bg-black text-white p-6">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-lg font-medium hover:bg-gray-900 p-2 block rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <Button className="md:hidden fixed top-4 left-4 z-50">
            <DrawingPinFilledIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-gray-800 text-white p-4">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold">
              Dashboard
            </DrawerTitle>
          </DrawerHeader>
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
          <DrawerClose asChild>
            <Button variant="outline" className="mt-4">
              Close
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
