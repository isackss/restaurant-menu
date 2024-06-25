"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <main className="">
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
        <div onClick={() => setModal(!modal)}>
          <Image
            src="/assets/img/jazztitulo.png"
            width={300}
            height={300}
            alt="noche de jazz"
            className="w-full"
          />
        </div>
        <div
          className="flex h-[100px] items-center justify-center rounded-xl border px-4 py-16 drop-shadow-lg"
          style={{
            backgroundImage: `url("/assets/img/restaurante.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Link href="/menu-restaurante" className="w-full">
            <p className="rounded-lg bg-gradient-to-r from-[#0d2242]/0 via-[#0d2242]/75 to-[#0d2242]/75 py-2 text-center text-2xl text-white shadow-xl">
              Menú del Restaurante
            </p>
          </Link>
        </div>

        <div
          className="flex h-[100px] items-center justify-center rounded-xl border px-4 py-16 drop-shadow-lg"
          style={{
            backgroundImage: `url("/assets/img/piscina.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Link href="/menu-piscina" className="w-full">
            <p className="rounded-lg bg-gradient-to-r from-[#0d2242]/0 via-[#0d2242]/75 to-[#0d2242]/100 py-2 text-center text-2xl text-white shadow-xl">
              Menú de Piscina
            </p>
          </Link>
        </div>
        <div
          className="flex h-[100px] items-center justify-center rounded-xl border px-4 py-16 drop-shadow-lg"
          style={{
            backgroundImage: `url("/assets/img/infantil.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Link href="/menu-infantil" className="w-full">
            <p className="rounded-lg bg-gradient-to-r from-[#0d2242]/0 via-[#0d2242]/75 to-[#0d2242]/100 py-2 text-center text-2xl text-white shadow-xl">
              Menú para niños
            </p>
          </Link>
        </div>
        <div
          className="flex h-[100px] items-center justify-center rounded-xl border px-4 py-16 drop-shadow-lg"
          style={{
            backgroundImage: `url("/assets/img/bebidas.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Link href="/menu-bebidas" className="w-full">
            <p className="rounded-lg  bg-gradient-to-r from-[#0d2242]/0 via-[#0d2242]/75 to-[#0d2242]/100 py-2 text-center text-2xl text-white shadow-md">
              Menú de Bebidas
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
