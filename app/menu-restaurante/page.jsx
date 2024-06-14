import MenuItem from "@/components/MenuItem";
import SectionTitle from "@/components/SectionTitle";
import { menuRestaurante } from "@/db";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Desayunos"
        descrip="Acompáñado con café o jugo de naranda."
        img="/assets/img/desayuno.png"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.desayunos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Entradas"
        descrip="Preparado al momento."
        img="/assets/img/entrada.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.entradas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Sopas"
        descrip="Preparado al momento."
        img="/assets/img/sopas.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.sopas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Emparedados"
        descrip="Servidos con papas fritas."
        img="/assets/img/emparedados.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.emparedados.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Pastas"
        descrip="Elige entre nuestras opciones de pastas."
        img="/assets/img/pastas.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.pastas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Aves"
        descrip="Preparado al momento."
        img="/assets/img/aves.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.aves.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Carnes"
        descrip="Preparado al momento."
        img="/assets/img/carnes.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.carnes.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Pescado y Mariscos"
        descrip="Preparado al momento."
        img="/assets/img/pescados.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.mariscos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Acompañamientos"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/acompanamientos.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.acompanamientos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
