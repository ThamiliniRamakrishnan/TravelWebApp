import { Navbar, Hero, AboutUs, Footer } from "../../components";
import AboutImg from "../../assets/12_1_1920x1280.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        className="Travel_hero-mid"
        heroImage={AboutImg}
        title="About"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
