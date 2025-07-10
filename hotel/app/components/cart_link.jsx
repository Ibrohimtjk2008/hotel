import room1 from "@/app/assets/images/room1.png";
import room2 from "@/app/assets/images/room2.png";
import Cart from "./cart";
export default function Cart_link() {
  return (
    <>
      <div className="container mx-auto">
        <p className="text-4xl py-10 flex justify-center">
          All our room types are including complementary breakfast
        </p>
        <Cart
          img={room1}
          about={
            "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself."
          }
          link={"#"}
          tittle={"Luxury redefined"}
        ></Cart>
        <Cart
          img={room2}
          about={
            "We love life at the beach. Being closeto the ocean with access to endless sandybeach ensures a relaxed state of mind. It seems like time stands still watching the ocean. "
          }
          link={"#"}
          tittle={"Leave your worries in the sand"}
        ></Cart>
      </div>
    </>
  );
}
