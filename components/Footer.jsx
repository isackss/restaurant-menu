"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <footer className="pb-4 px-6">
      {path === "/" ? (
        <div className="flex justify-center">
          <div className="inline-block">
            <Link href="https://www.princesshotelpanama.com">
              <Image
                src="/assets/img/princesslogo.png"
                width={300}
                height={300}
                className="w-[100px]"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="inline-block">
            <Link href="https://www.princesshotelpanama.com">
              <Image
                src="/assets/img/princesslogo.png"
                width={300}
                height={300}
                className="w-[100px]"
              />
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="px-4 py-2 shadow-md rounded-md hover:bg-slate-100 border"
            >
              Ir al menú principal
            </Link>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
