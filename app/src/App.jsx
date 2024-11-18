import AppBar from "./components/AppBar";
import Hero from "./components/Hero";
import FeaturesOverview from "./components/FeaturesOverview";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

const App = (props) => {
  return (
    <>
      <AppBar />
      <Hero />
      <FeaturesOverview />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default App;
