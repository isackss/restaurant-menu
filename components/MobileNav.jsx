"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { menuRestaurante } from "@/db";
import Link from "next/link";
import Image from "next/image";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const keys = Object.keys(menuRestaurante);
  console.log(keys);
  return (
    <header className="sticky top-0 ">
      <nav className="flex size-full items-center justify-between bg-white p-4 opacity-75">
        <div>
          <Link href="/">
            <Image
              src="/assets/img/logo.png"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          {showNav ? (
            <CloseIcon onClick={() => setShowNav(!showNav)} />
          ) : (
            <MenuIcon onClick={() => setShowNav(!showNav)} />
          )}
        </div>
      </nav>
      <ul
        className={`absolute top-0 z-10 h-screen w-1/2 bg-white opacity-0 transition-all duration-500 ease-in-out  ${showNav ? "left-0 opacity-100" : "left-[-200px]"}`}
      >
        <div className="flex size-full flex-col gap-2 overflow-y-scroll pb-32 pt-8 opacity-100">
          {Object.keys(menuRestaurante).map((cat) => {
            if (cat === "bebidasCalientes") {
              return (
                <li className="w-full cursor-pointer border-b" key={cat}>
                  <Link
                    href={`#${cat}`}
                    className="block p-4 font-bold capitalize"
                    onClick={() => setShowNav((prev) => !prev)}
                  >
                    bebidas calientes
                  </Link>
                </li>
              );
            } else if (cat === "bebidasfrias") {
              return (
                <li className="w-full cursor-pointer border-b" key={cat}>
                  <Link
                    href={`#${cat}`}
                    key={cat}
                    className="block p-4 font-bold capitalize"
                    onClick={() => setShowNav((prev) => !prev)}
                  >
                    bebidas frías
                  </Link>
                </li>
              );
            }
            return (
              <li className="w-full cursor-pointer border-b" key={cat}>
                <Link
                  href={`#${cat}`}
                  key={cat}
                  className="block p-4 font-bold capitalize"
                  onClick={() => setShowNav((prev) => !prev)}
                >
                  {cat === "acompanamientos" ? "acompañamientos" : cat}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </header>
  );
};

export default MobileNav;
