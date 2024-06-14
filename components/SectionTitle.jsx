import Image from "next/image";

import WorkspacesIcon from "@mui/icons-material/Workspaces";

const SectionTitle = ({ title, descrip, img }) => {
  return (
    <div className="rounded-3xl mb-2 shadow-md">
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
        <div className="flex gap-4 items-center text-slate-800">
          <WorkspacesIcon className="text-md" />
          <div className="text-xl font-bold">{title}</div>
          <WorkspacesIcon />
        </div>
        <div className="text-slate-500 text-sm">{descrip}</div>
      </div>
    </div>
  );
};

export default SectionTitle;
