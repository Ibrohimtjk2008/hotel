import Image from "next/image";

export default function Facilities_cart({ img, tittle }) {
  return (
    <>
      <div className="px-5 container mx-auto py-10">
        <div className="flex relative flex-col items-center w-full">
          <Image src={img} alt="error"></Image>
          <div className="absolute -bottom-1 z-10 bg-white  md:px-10 w-1/2 flex justify-center py-3">
            <div className="w-full md:flex justify-center ">
              <p className="text-2xl md:text-5xl flex text-center justify-center">{tittle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
