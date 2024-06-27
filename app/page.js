"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";
import Link from "next/link";
import { mainMenu } from "@/db";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <main>
      <Modal modal={modal} setModal={setModal} />
      <section className="my-8 flex flex-col justify-center gap-6">
        <div className="flex justify-center">
          <Image
            src="/assets/img/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div onClick={() => setModal(!modal)} className="cursor-pointer ">
          <Image
            src="/assets/img/jazztitulo.png"
            width={300}
            height={300}
            alt="noche de jazz"
            className="w-full"
          />
        </div>
        {mainMenu.map((item) => (
          <div
            className="flex h-[100px] items-center justify-center rounded-xl border px-4 py-16 drop-shadow-lg"
            style={item.style}
            key={item.title}
          >
            <Link href={item.href} className="w-full">
              <p className="rounded-lg  bg-gradient-to-r from-[#0d2242]/0 via-[#0d2242]/75 to-[#0d2242]/100 py-2 text-center text-2xl text-white shadow-md">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
