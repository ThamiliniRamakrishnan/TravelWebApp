import { Navbar, Hero, Trip, Footer } from "../../components";
import ServiceImg from "../../assets/1_2_1920x1280.jpg";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        className="Travel_hero-mid"
        heroImage={ServiceImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
