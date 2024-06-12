import MenuItem from "@/components/MenuItem";
import SectionTitle from "@/components/SectionTitle";
import { menuItems } from "@/db/data";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Desayunos"
        descrip="Acompáñado con café o jugo de naranda."
        img="/assets/img/desayuno.png"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuItems.desayunos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Entradas"
        descrip="Preparado al momento."
        img="/assets/img/entrada.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuItems.entradas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Sopas"
        descrip="Preparado al momento."
        img="/assets/img/sopas.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuItems.sopas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Emparedados"
        descrip="Servidos con papas fritas."
        img="/assets/img/emparedados.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuItems.emparedados.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Pastas"
        descrip="Elige entre nuestras opciones de pastas."
        img="/assets/img/pastas.jpg"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuItems.pastas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
