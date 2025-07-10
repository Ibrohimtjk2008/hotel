import Image from "next/image";

import fon1 from "@/app/assets/images/fon1.png";
import fon2 from "@/app/assets/images/fon2.png";
import fon3 from "@/app/assets/images/fon3.png";
import Header_link from "./header_link";

export default function Header({ type }) {
  const stils = {
    main: <Image src={fon1} alt="fon1" fill className="object-cover" />,
    Facilities: <Image src={fon2} alt="fon1" fill className="object-cover" />,
    Rooms: <Image src={fon3} alt="fon1" fill className="object-cover" />,
  };
  return (
    <>
      <div className="relative w-full h-screen">
        {stils[type]}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Header_link type={"main"}></Header_link>
      </div>
    </>
  );
}
