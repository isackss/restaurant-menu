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
            className="h-full object-cover object-center"
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
          <div className="flex gap-4">
            <div className="mt-4 font-bold text-slate-800 text-sm">
              ${data.price}
            </div>
            {data.extras ? (
              <div className="flex flex-col w-full text-xs justify-center">
                <div className="flex justify-center font-bold bg-slate-100 rounded-md">
                  Extra
                </div>
                <div className="flex gap-2 justify-center">
                  {data.extras.map((extra) => (
                    <div key={extra.title}>
                      <div className="text-center">{extra.title}</div>
                      <div className="text-center font-bold">
                        ${extra.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <div className="flex flex-col gap-1 items-center p-2 justify-center">
          <FavoriteIcon className="text-red-700" />
          <div className="text-xs font-bold">10</div>
        </div> */}
      </div>
    </article>
  );
};

export default MenuItem;
