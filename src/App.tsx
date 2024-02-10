import Companies from "./components/Companies";
import Crew from "./components/Crew";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="h-screen text-primary-200 font-epilogue font-[500]">
      <Navbar />
      <Hero />
      <Services />
      <Companies />
      <Reviews />
      <Features />
      <Crew />
      <Footer />
      {/* <div className="h-[700px]"></div> */}
    </div>
  );
};

export default App;
