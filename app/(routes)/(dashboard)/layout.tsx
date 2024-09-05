import React from "react";
import { Sidebar } from "./dashboard/components/Sidebar";
import { NavbarDashboard } from "./dashboard/components/NavbarDashboard";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        <Sidebar />
      </div>
      <div className="w-full h-full xl:ml-80">
        <NavbarDashboard />
      <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
