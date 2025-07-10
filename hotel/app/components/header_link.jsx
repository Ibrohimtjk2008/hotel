import Link from "next/link";
import Burger from "./burger";
import Image from "next/image";
import blocnot from "@/app/assets/icons/blocnot.svg";


import logo from "@/app/assets/icons/logo.svg";

export default function Header_link({ type }) {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Image src={logo} alt="logo" />
          <ul className="hidden md:flex gap-9 text-2xl ">
            <li>
              <Link
                href={"/"}
                className="hover:font-semibold hover:underline duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/Facilities"}
                className="hover:font-semibold hover:underline duration-300"
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                href={"/Rooms"}
                className="hover:font-semibold hover:underline duration-300"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                href={"/Contact"}
                className="hover:font-semibold hover:underline duration-300"
              >
                Contact-us
              </Link>
            </li>
          </ul>
          <div className="md:hidden block">
            <Burger button={true} />
          </div>
        </div>
        {type === "main" ? (
          <div className="container mx-auto h-screen flex flex-col justify-center px-4 text-white">
            <div className="flex flex-col gap-4 items-start">
              <p className="font-extralight text-2xl md:text-5xl max-w-xl">
                WELCOME TO
              </p>
              <p className="font-serif text-5xl md:text-9xl">LUXURY</p>
              <p className="font-serif text-4xl md:text-7xl">HOTELS</p>
              <p className="font-light text-md md:text-3xl max-w-xl">
                Book your stay and enjoy Luxury
                <br />
                redefined at the most affordable rates.
              </p>
            </div>

            <div className="mt-25 flex justify-center">
              <button className="flex items-center gap-2 bg-yellow-600 text-white font-bold px-7 py-4 rounded-lg">
                <Image src={blocnot} alt="icon" width={24} height={24} />
                BOOK NOW
              </button>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
