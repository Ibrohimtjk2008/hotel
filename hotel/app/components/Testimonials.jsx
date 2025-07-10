import strelka from "@/app/assets/icons/strelka.svg";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className="flex justify-center items-center py-32 flex-col">
        <p className="text-5xl font-serif">Testimonials</p>
        <div>
          <p className="text-xl md:text-2xl mt-10 text-center ">
            "Calm, Serene, Retro – What a way to relax and enjoy"
          </p>
        </div>
        <p className="text-lg"> Mr. and Mrs. Baxter, UK</p>
        <div className="flex items-center gap-3 mt-5">
          <button className="p-1 rounded-sm bg-yellow-600">
            <Image src={strelka} alt="error"></Image>
          </button>
          <button className="p-1 rounded-sm bg-yellow-600 rotate-180">
            <Image src={strelka} alt="error"></Image>
          </button>
        </div>
      </div>
    </>
  );
}
