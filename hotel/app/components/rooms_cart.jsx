import plus from "@/app/assets/icons/plus.svg";
import Image from "next/image";

export default function Rooms_cart({ valuable, tittle, img }) {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="relative w-full border-x-2 border-blue-950">
          <Image src={img} alt="error"></Image>
          <div className="absolute bg-blue-950 w-full -bottom-0 flex justify-center items-center py-2 md:py-12 px-1">
            <div className="w-full md:flex justify-center">
              <p className="text-2xl md:text-5xl flex text-center justify-center text-white">
                {tittle}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-3 py-4 md:px-16 md:py-16 md:flex-row justify-between items-center border-2 rounded-b-xl">
          <div className="flex gap-4 items-center">
            <Image src={plus} alt="error"></Image>
            <p className="text-3xl font-bold">VIEW ROOM DETAILS</p>
          </div>
          <button className="bg-yellow-600 rounded-xl px-8 py-5 text-white font-bold">
            <p>{valuable}</p>
          </button>
        </div>
      </div>
    </>
  );
}
