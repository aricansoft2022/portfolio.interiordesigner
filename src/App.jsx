import Container from "./components/layout/Container";
import Hero from "./components/sections/Hero";
import Navbar from "./components/navigation/Navbar";
import Services from "./components/sections/Services";
import Brilliance from "./components/sections/Brilliance";
import ThreeSimpleSteps from "./components/sections/ThreeSimpleSteps";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
        <Services />
        <Brilliance />
        <ThreeSimpleSteps />
        <Testimonials />
        <Newsletter />
      </Container>
      <Footer />
    </>
  );
}

export default App;
