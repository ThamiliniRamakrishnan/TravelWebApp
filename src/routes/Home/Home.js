import { Navbar, Hero, Destination, Trip, Footer } from "../../components";
import HomeImg from "../../assets/12.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        className="Travel_hero"
        heroImage={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destinations"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
