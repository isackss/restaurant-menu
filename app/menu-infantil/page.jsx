import MenuItem from "@/components/MenuItem";
import SectionTitle from "@/components/SectionTitle";
import { menuInfantil } from "@/db";

const page = () => {
  return (
    <div>
      <SectionTitle
        title="Menú Infantil"
        descrip="Preparado al momento."
        img="/assets/img/entrada.jpg"
      />
      <div className="mb-10 flex flex-col gap-4">
        {menuInfantil.menu.map((item) => (
          <MenuItem key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
