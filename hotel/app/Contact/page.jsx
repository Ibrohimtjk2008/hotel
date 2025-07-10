import Footer from "../components/Footer";

import Header_link from "../components/header_link";

export default function Contact() {
  return (
    <>
      <div className="bg-blue-950  relative w-full h-fit">
        <Header_link type={"Contact"} />
        <div className="flex items-center justify-center py-36 md:py-44">
          <p className="text-3xl md:text-9xl text-white font-bold ">
            CONTACT-US
          </p>
        </div>
      </div>
      <div className="container mx-auto w-full mb-40">
        <div className=" flex gap-2 py-20 flex-col">
          <p className="text-5xl font-serif">WE ARE HERE FOR YOU</p>
          <p className="text-2xl font-bold">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-1/3 flex flex-col gap-4">
          <p className="text-2xl">
            497 Evergreen Rd. Roseville,
            <br /> CA 95673
          </p>
          <p className="text-2xl font-bold">View map</p>
          <p className="text-2xl">
            Phone: +44 345 678 903 <br />
            Email: luxury_hotels@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-8 w-1/6">
          <input type="text" className="border-2 border-gray-400" />
          <input type="email" className="border-2 border-gray-400" />
          <textarea className="border-2 border-gray-400"></textarea>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
