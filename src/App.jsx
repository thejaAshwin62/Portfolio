import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  IconCloudDemo,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <About />
          {/* <Experience /> */}
          <div className="my-8 sm:my-12 md:my-16 lg:my-20">
            <IconCloudDemo />
          </div>
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
