import { Whisper } from "next/font/google";

const whisper = Whisper({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <div className="mt-5 w-[180px] p-2 leading-3 text-[#9f833b]">
      <div className={`${whisper.className} text-5xl leading-3`}>Sapphire</div>
      <div className="text-right text-sm leading-10 tracking-widest">
        RESTAURANT
      </div>
    </div>
  );
};

export default Logo;
