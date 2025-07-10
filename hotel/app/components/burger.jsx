"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import burger from "@/app/assets/icons/burger.svg";
import close from "@/app/assets/icons/close.svg";
import { useRouter } from "next/navigation";

export default function Burger({ button }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Facilities",
      link: "/Facilities",
    },
    {
      text: "Rooms",
      link: "#Rooms",
    },
    {
      text: "Contact-us",
      link: "#Contact-us",
    },
  ];

  const router = useRouter();

  return (
    <>
      {button && (
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="w-10 h-10"
        >
          <Image src={burger} alt="burger" width={40} height={40} />
        </button>
      )}
      {open && (
        <div className="bg-white absolute w-screen h-screen z-50 top-0 left-0 p-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-start gap-8">
              {links.map((link) => (
                <button
                  key={link.text}
                  className="cursor-pointer text-3xl text-black font-semibold"
                  onClick={() => {
                    router.push(link.link);
                    setOpen(false); // закрываем меню
                  }}
                >
                  {link.text}
                </button>
              ))}
            </div>
            <button className="w-8 h-8" onClick={() => setOpen(false)}>
              <Image className="w-full h-full" src={close} alt="close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
