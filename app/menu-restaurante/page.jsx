import MenuItem from "@/components/MenuItem";
import MobileNav from "@/components/MobileNav";
import SectionTitle from "@/components/SectionTitle";
import { menuRestaurante } from "@/db";

const page = () => {
  return (
    <div>
      <MobileNav />
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
        id="entradas"
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
        id="sopas"
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
        id="emparedados"
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
        id="pastas"
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
        id="aves"
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
        id="carnes"
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
        id="mariscos"
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
        id="acompanamientos"
      />
      <div className="flex flex-col gap-4 mb-10">
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
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.postres.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Bebidas Calientes"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/bcalientes.jpg"
        id="bebidasCalientes"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.bebidasCalientes.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Bebidas Frías"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/bfrias.jpg"
        id="bebidasfrias"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.bebidasfrias.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Tragos"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/tragos.jpg"
        id="tragos"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.tragos.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Cocteles"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/cocteles.jpg"
        id="cocteles"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.cocteles.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
      <SectionTitle
        title="Cervezas"
        descrip="Elije una de las siguientes opciones."
        img="/assets/img/cervezas.jpg"
        id="cervezas"
      />
      <div className="flex flex-col gap-4 mb-10">
        {menuRestaurante.cervezas.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
