import Navbar from "./components/Navbar";
import Add from "./components/Add";
import Bottom from "./components/Bottom";
import Box from "./components/Box";
import Start from "./components/Start";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonials";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Homepage />
      <Box />
      <Add />
      <Testimonial />
      <Start />
      <Footer />
      <Bottom />
    </div>
  );
}
