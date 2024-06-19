import MenuItem from "@/components/MenuItem";
import SectionTitle from "@/components/SectionTitle";
import { menuPiscina } from "@/db";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Entradas"
        descrip="Preparado al momento."
        img="/assets/img/entrada.jpg"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuPiscina.entradas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Emparedados"
        descrip="Servidos con papas fritas."
        img="/assets/img/emparedados.jpg"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuPiscina.emparedados.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Sopas"
        descrip="Preparado al momento."
        img="/assets/img/sopas.jpg"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuPiscina.sopas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Fuerte"
        descrip="Preparado al momento."
        img="/assets/img/alitasbuffalo.jpg"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuPiscina.fuerte.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
