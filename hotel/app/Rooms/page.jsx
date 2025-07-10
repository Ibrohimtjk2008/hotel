import Image from "next/image";
import Facilities_tittle from "../components/Facilities_tittle";
import Footer from "../components/Footer";
import Header from "../components/header";
import Testimonials from "../components/Testimonials";

import room3 from "@/app/assets/images/room3.png";
import room4 from "@/app/assets/images/room4.png";
import room5 from "@/app/assets/images/room5.png";
import Rooms_cart from "../components/rooms_cart";

export default function Rooms() {
  return (
    <>
      <Header type={"Rooms"}></Header>
      <Facilities_tittle
        tittle={"ROOMS AND RATES"}
        about={
          "Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. "
        }
      ></Facilities_tittle>
      <Rooms_cart
        img={room3}
        tittle={"SINGLE ROOM"}
        valuable={"$147  Avg/night"}
      ></Rooms_cart>
      <Rooms_cart
        img={room4}
        tittle={"DOUBLE ROOM"}
        valuable={"$147  Avg/night"}
      ></Rooms_cart>
      <Rooms_cart
        img={room5}
        tittle={"TWIN ROOM"}
        valuable={"$147  Avg/night"}
      ></Rooms_cart>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
