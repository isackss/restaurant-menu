import Categories from "@/components/Categories";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col gap-6 justify-center my-8">
        <div className="flex justify-center">
          <Image
            src="/assets/img/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div
          className="p-20 border flex items-center justify-center h-[100px]"
          style={{
            backgroundImage: `url("/assets/img/restaurante.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Link href="/menu-restaurante" className="">
            <p className="p-2 text-2xl text-white text-center bg-[#0d2242] bg-opacity-75 shadow-md">
              Menú del Restaurante
            </p>
          </Link>
        </div>

        <div
          className="p-20 border flex items-center justify-center h-[100px]"
          style={{
            backgroundImage: `url("/assets/img/piscina.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Link href="/menu-piscina">
            <p className="p-2 text-2xl text-white text-center bg-[#0d2242] bg-opacity-75 shadow-md">
              Menú de Piscina
            </p>
          </Link>
        </div>
        <div
          className="p-20 border flex items-center justify-center h-[100px]"
          style={{
            backgroundImage: `url("/assets/img/infantil.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Link href="/menu-infantil">
            <p className="p-2 text-2xl text-white text-center bg-[#0d2242] bg-opacity-75 shadow-md">
              Menú para niños
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
