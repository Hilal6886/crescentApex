
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

// Lazy load components



const ArfaSchool = () => {
  

  

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
         <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
        <ButtonGradient />
    </div>
  
  );
};

// Stylish loading spinner component


export default ArfaSchool;
