import Image from "next/image";
import Link from "next/link";

export default function Cart({ tittle, img, about, link }) {
  return (
    <>
      <div className="px-5 gap-5 py-7 flex-col flex w-full h-fit md:flex-row  justify-center items-center my-10">
        <div className=" border-l-3 border-gray-500 px-6 flex flex-col gap-4 md:w-1/3 ">
          <p className="flex flex-wrap items-center text-5xl font-serif">
            {tittle}
          </p>
          <p className="text-xl">{about}</p>
          <Link href={link}>
            <button className="py-2 text-white font-bold px-8 rounded-sm w-fit bg-yellow-600">
              EXPLORE
            </button>
          </Link>
        </div>
        <div>
          <Image src={img} alt="room1 img" height={550} width={550}></Image>
        </div>
      </div>
    </>
  );
}
