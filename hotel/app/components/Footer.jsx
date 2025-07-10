import Image from "next/image";
import facebook from "@/app/assets/icons/facebook.svg";
import twiter from "@/app/assets/icons/twiter.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {" "}
      <div className="flex justify-center ">
        <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-b-[60px] border-l-transparent border-r-transparent border-b-blue-950"></div>
      </div>
      <div className="bg-blue-950">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row flex-wrap w-full md:justify-between py-16">
            <div className="items-center flex flex-col gap-5  md:items-start">
              <div className="flex flex-col gap-1  items-center text-white">
                <p className="text-2xl font-serif">LUXURY</p>
                <p className="font-serif">HOTELS</p>
              </div>
              <div className="flex flex-col text-white">
                <p>497 Evergreen Rd. Roseville, CA 95673</p>
                <p>+44 345 678 903</p>
                <p>luxury_hotels@gmail.com</p>
              </div>
            </div>
            <div className="text-white ">
              <ul className="flex flex-col gap-5">
                <li>
                  <Link href={"#"}>About Us</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact</Link>
                </li>
                <li>
                  <Link href={"#"}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="text-white ">
              <ul className="flex flex-col gap-5">
                <li>
                  <Link href={"#"} className="flex gap-2 items-center">
                    <Image src={facebook} alt="error"></Image>
                    <p className="text-md">Facebook</p>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex gap-2 items-center">
                    <Image src={twiter} alt="error"></Image>
                    <p className="text-md">Twiter</p>
                  </Link>{" "}
                </li>
                <li>
                  <Link href={"#"} className="flex gap-2 items-center">
                    <Image src={instagram} alt="error"></Image>
                    <p className="text-md">Instagram</p>
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="items-center md:flex flex-col gap-5">
              <p className="text-white font-bold">
                Subscribe to our newsletter
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-white font-bold border-2 border-yellow-600 rounded-sm p-2"
                />
                <button className="text-white font-bold p-2 bg-yellow-600 rounded-sm">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
