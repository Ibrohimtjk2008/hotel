import Facilities_cart from "../components/Facilities_cart";
import Facilities_tittle from "../components/Facilities_tittle";
import Footer from "../components/Footer";
import Header from "../components/header";
import Testimonials from "../components/Testimonials";

import gymimage from "@/app/assets/images/gymimage.png";
import poolsidebar from "@/app/assets/images/poolsidebar.png";
import spa from "@/app/assets/images/spa.png";
import swimming from "@/app/assets/images/swimming.png";
import restaurant from "@/app/assets/images/restaurant.png";
import laundry from "@/app/assets/images/laundry.png";

export default function Facilities() {
  return (
    <>
      <Header type={"Facilities"}></Header>
      <Facilities_tittle
        tittle={"FACILITIES"}
        about={
          "We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisureand our modern luxury resort facilities will help you enjoy the best of all. "
        }
      ></Facilities_tittle>
      <Facilities_cart img={gymimage} tittle={"THE GYM"}></Facilities_cart>
      <Facilities_cart
        img={poolsidebar}
        tittle={"POOLSIDE BAR"}
      ></Facilities_cart>
      <Facilities_cart img={spa} tittle={"THE SPA"}></Facilities_cart>
      <Facilities_cart
        img={swimming}
        tittle={"SWIMMING POOL"}
      ></Facilities_cart>
      <Facilities_cart img={restaurant} tittle={"RESTAURANT"}></Facilities_cart>
      <Facilities_cart img={laundry} tittle={"LAUNDRY"}></Facilities_cart>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
