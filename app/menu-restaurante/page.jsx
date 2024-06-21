import MenuItem from "@/components/MenuItem";
import MobileNav from "@/components/MobileNav";
import SectionTitle from "@/components/SectionTitle";
import { menuRestaurante } from "@/db";

const page = () => {
  return (
    <main>
      <MobileNav />
      <h1 className="pb-4 pr-2 text-right text-xl font-semibold text-slate-800">
        Menú del Restaurante
      </h1>
      <SectionTitle
        title="Desayunos"
        descrip="Acompáñado con café o jugo de naranda."
        img="/assets/img/desayuno.png"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.desayunos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Entradas"
        descrip="Preparado al momento."
        img="/assets/img/entrada.jpg"
        id="entradas"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.entradas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Sopas"
        descrip="Preparado al momento."
        img="/assets/img/sopas.jpg"
        id="sopas"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.sopas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Emparedados"
        descrip="Servidos con papas fritas."
        img="/assets/img/emparedados.jpg"
        id="emparedados"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.emparedados.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Pastas"
        descrip="Elige entre nuestras opciones de pastas."
        img="/assets/img/pastas.jpg"
        id="pastas"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.pastas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Aves"
        descrip="Preparado al momento."
        img="/assets/img/aves.jpg"
        id="aves"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.aves.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Carnes"
        descrip="Preparado al momento."
        img="/assets/img/carnes.jpg"
        id="carnes"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.carnes.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Pescado y Mariscos"
        descrip="Preparado al momento."
        img="/assets/img/pescados.jpg"
        id="mariscos"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.mariscos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Acompañamientos"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/acompanamientos.jpg"
        id="acompanamientos"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.acompanamientos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Postres"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/acompanamientos.jpg"
        id="postres"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuRestaurante.postres.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </main>
  );
};

export default page;
