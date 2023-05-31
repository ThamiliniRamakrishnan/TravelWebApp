import { Navbar, Hero, ContactUsForm, Footer } from "../../components";
import ContactImg from "../../assets/10_1_1920x1280.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        className="Travel_hero-mid"
        heroImage={ContactImg}
        title="Contact"
        url="/"
        btnClass="hide"
      />
      <ContactUsForm />
      <Footer />
    </>
  );
}

export default Contact;
