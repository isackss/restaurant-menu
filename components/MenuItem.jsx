import Image from "next/image";

/* import FavoriteIcon from "@mui/icons-material/Favorite"; */

const MenuItem = ({ data }) => {
  return (
    <article className="flex max-h-[130px] min-h-[130px] w-full overflow-hidden rounded-md border-transparent shadow-md">
      <div className="flex h-auto w-44 items-center justify-center">
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
        <div className="flex flex-1 flex-col justify-between p-2">
          <div>
            <div className="mb-1 text-sm font-bold leading-4 text-slate-800">
              {data.title}
            </div>
            <div className="line-clamp-3 text-xs text-slate-500">
              {data.description}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-4 text-sm font-bold text-slate-800">
              ${data.price}
            </div>
            {data.extras ? (
              <div className="flex w-full flex-col justify-center text-xs">
                <div className="flex justify-center rounded-md bg-slate-100 font-bold">
                  Extra
                </div>
                <div className="flex justify-center gap-2">
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
