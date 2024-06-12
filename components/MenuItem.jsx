import Image from "next/image";

import FavoriteIcon from "@mui/icons-material/Favorite";

const MenuItem = ({ data }) => {
  return (
    <article className="flex w-full shadow-md rounded-md border-transparent overflow-hidden min-h-[130px] max-h-[130px]">
      <div className="w-44 h-auto flex justify-center items-center">
        {data.img ? (
          <Image
            src={data.img}
            alt="pancake"
            width={300}
            height={300}
            className="h-full"
          />
        ) : (
          "Sin foto"
        )}
      </div>
      <div className="flex w-full">
        <div className="flex-1 flex flex-col p-2 justify-between">
          <div>
            <div className="font-bold text-slate-800 leading-4 text-sm mb-1">
              {data.title}
            </div>
            <div className="line-clamp-3 text-xs text-slate-500">
              {data.description}
            </div>
          </div>
          <div className="mt-4 font-bold text-slate-800 text-sm">
            ${data.price}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center p-2 justify-center">
          <FavoriteIcon className="text-red-700" />
          <div className="text-xs font-bold">10</div>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
