import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="my-8 flex flex-col justify-center gap-6">
        <div className="flex justify-center">
          <Image
            src="/assets/img/logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div
          className="flex h-[100px] items-center justify-center border p-20"
          style={{
            backgroundImage: `url("/assets/img/restaurante.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Link href="/menu-restaurante" className="">
            <p className="bg-[#0d2242]/75 p-2 text-center text-2xl text-white shadow-md">
              Menú del Restaurante
            </p>
          </Link>
        </div>

        <div
          className="flex h-[100px] items-center justify-center border p-20"
          style={{
            backgroundImage: `url("/assets/img/piscina.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Link href="/menu-piscina">
            <p className="bg-[#0d2242]/75 p-2 text-center text-2xl text-white shadow-md">
              Menú de Piscina
            </p>
          </Link>
        </div>
        <div
          className="flex h-[100px] items-center justify-center border p-20"
          style={{
            backgroundImage: `url("/assets/img/infantil.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Link href="/menu-infantil">
            <p className="bg-[#0d2242]/75 p-2 text-center text-2xl text-white shadow-md">
              Menú para niños
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
