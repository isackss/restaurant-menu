import SectionTitle from "@/components/SectionTitle";
import { menuBebidas } from "@/db";
import MenuItem from "@/components/MenuItem";

const page = () => {
  return (
    <main>
      <SectionTitle
        title="Bebidas Calientes"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/bcalientes.jpg"
        id="bebidasCalientes"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuBebidas.bebidasCalientes.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Bebidas Frías"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/bfrias.jpg"
        id="bebidasfrias"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuBebidas.bebidasfrias.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Tragos"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/tragos.jpg"
        id="tragos"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuBebidas.tragos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Cocteles"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/cocteles.jpg"
        id="cocteles"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuBebidas.cocteles.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Cervezas"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/cervezas.jpg"
        id="cervezas"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuBebidas.cervezas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </main>
  );
};

export default page;
