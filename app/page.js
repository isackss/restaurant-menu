import Categories from "@/components/Categories";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col gap-6 h-screen justify-center">
        <div className="flex justify-center">
          <Image
            src="/assets/img/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div
          className="p-20 border flex justify-center"
          style={{
            backgroundImage: `url("/assets/img/restaurante.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <Link href="/restaurante">
            {/* <Image
              src="/assets/img/restaurante.jpg"
              alt="restaurante"
              width={300}
              height={300}
            /> */}
            <p className="p-2 text-2xl text-white text-center  bg-[#234c8c] bg-gradient-to-r from-[#183461] bg-opacity-50 rounded-lg shadow-lg">
              Menú del Restaurante
            </p>
          </Link>
        </div>

        <div
          className="p-20 border flex justify-center"
          style={{
            backgroundImage: `url("/assets/img/piscina.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <Link href="/piscina">
            <p className="p-2 text-2xl text-white text-center  bg-[#234c8c] bg-gradient-to-r from-[#183461] bg-opacity-50 rounded-lg shadow-lg">
              Menú de Piscina
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
