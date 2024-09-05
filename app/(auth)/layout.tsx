import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center">
      <div className="flex items-center justify-center">{children}</div>
      <div className="hidden lg:flex lg:bg-slate-300 h-full justify-center items-center lg:flex-col text-3xl font-medium">
        <Image src="/logoRentCar.png" alt="logo rental cars" width={100} height={100} />
        <p className=" mt-10">Alquila seguro</p>
        <p>alquila con </p>
        <h1 className=" font-black text-5xl"> RentalCars</h1>
      </div>
    </div>
  );
}
