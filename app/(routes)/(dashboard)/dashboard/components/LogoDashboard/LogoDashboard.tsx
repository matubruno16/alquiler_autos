import Image from "next/image";
import Link from "next/link";
import React from "react";

export function LogoDashboard() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center h-20 gap-2 border-b cursor-pointer min-h-20" 
    >
      <Image
        src="/logoRentCar.png"
        alt="logo rental cars"
        width={80}
        height={80}
        priority
      />
      <h1 className="hidden">RentCars</h1>
    </Link>
  );
}
