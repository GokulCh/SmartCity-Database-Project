import NavigationBar from './components/NavigationBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import HowItWorksSection from './components/HowItWorksSection.jsx';
import UserTestimonials from './components/UserTestimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import TrafficMap from './components/TrafficMap.jsx';

const App = props => {
  return (
    <>
      <NavigationBar />
      <section id="navigation">
        <HeroSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="testimonials">
        <UserTestimonials />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <section id="traffic-map">
        <TrafficMap />
      </section>
    </>
  );
};

export default App;
