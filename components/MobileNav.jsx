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
      <nav className="flex justify-between items-center opacity-75 bg-white w-full h-full p-4">
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
        className={`absolute z-[10] w-1/2 top-0 opacity-0 transition-all duration-500 ease-in-out bg-white h-screen  ${showNav ? "left-0 opacity-100" : "left-[-200px]"}`}
      >
        <div className="flex flex-col gap-2 opacity-100 w-full h-full overflow-y-scroll pb-32 pt-8">
          {Object.keys(menuRestaurante).map((cat) => {
            if (cat === "bebidasCalientes") {
              return (
                <li className="cursor-pointer border-b w-full">
                  <Link
                    href={`#${cat}`}
                    key={cat}
                    className="font-bold capitalize p-4 block"
                  >
                    bebidas calientes
                  </Link>
                </li>
              );
            } else if (cat === "bebidasfrias") {
              return (
                <li className="cursor-pointer border-b w-full">
                  <Link
                    href={`#${cat}`}
                    key={cat}
                    className="font-bold capitalize p-4 block"
                  >
                    bebidas frías
                  </Link>
                </li>
              );
            }
            return (
              <li className="cursor-pointer border-b w-full">
                <Link
                  href={`#${cat}`}
                  key={cat}
                  className="font-bold capitalize p-4 block"
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
