"use client";

/* import { useState } from "react"; */
/* import Modal from "@/components/Modal"; */
import Image from "next/image";
import Link from "next/link";
import { mainMenu } from "@/db";

export default function Home() {
  /* const [modal, setModal] = useState(false); */

  return (
    <div className="">
      {/* <Modal modal={modal} setModal={setModal} /> */}
      <header
        style={{ backgroundImage: "url('/assets/img/fachadahotel-sm.jpg')" }}
        className="w-full h-60 bg-cover flex justify-end"
      >
        {/* <Image
          src="/assets/img/fachadahotel.jpg"
          width={100}
          height={100}
          alt="Fachada del hotel"
          className="w-full object-cover"
        /> */}
        <div className="flex flex-col-reverse items-end p-2 justify-between h-full bg-[#0d2242] w-24 self-end">
          <div className="">
            <Image
              src="/assets/img/logo.png"
              alt="logo"
              width={75}
              height={75}
              className=""
            />
          </div>
          <div>
            <Image
              src="/assets/img/princesslogo.png"
              width={75}
              height={75}
              className="object-contain"
            />
          </div>
        </div>
      </header>
      <section className="my-8 flex flex-col justify-center gap-6 px-2">
        {/* <div onClick={() => setModal(!modal)} className="cursor-pointer ">
          <Image
            src="/assets/img/jazztitulo.png"
            width={300}
            height={300}
            alt="noche de jazz"
            className="w-full"
          />
        </div> */}
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
    </div>
  );
}
