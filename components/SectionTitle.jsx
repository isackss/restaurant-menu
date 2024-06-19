import Image from "next/image";

/* import WorkspacesIcon from "@mui/icons-material/Workspaces"; */

const SectionTitle = ({ title, descrip, img, id }) => {
  return (
    <div className="mb-2 rounded-3xl shadow-md" id={id}>
      <div className="max-h-32 overflow-hidden">
        <Image
          src={img}
          width={300}
          height={300}
          alt="ensalada"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center gap-2 py-4">
        <div className="flex items-center gap-1 text-slate-800">
          {/* <WorkspacesIcon className="text-sm" /> */}
          <Image
            src="/assets/img/vineta_left.png"
            width={100}
            height={100}
            alt="biñeta"
          />
          <div className="text-lg font-semibold">{title}</div>
          <Image
            src="/assets/img/vineta_right.png"
            width={100}
            height={100}
            alt="biñeta"
          />
          {/* <WorkspacesIcon /> */}
        </div>
        <div className="text-sm text-slate-500">{descrip}</div>
      </div>
    </div>
  );
};

export default SectionTitle;
