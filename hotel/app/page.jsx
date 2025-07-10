import Cart_link from "./components/cart_link";
import Footer from "./components/Footer";
import Header from "./components/header";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Header type={"main"}></Header>
      <Cart_link></Cart_link>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
