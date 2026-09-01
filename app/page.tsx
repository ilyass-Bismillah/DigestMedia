import Platforms from "@/components/Platforms";
import ChooseUs from "./(landingPage)/_components/ChooseUs";
import HeroSection from "./(landingPage)/_components/HeroSection";
import LatestBlog from "./(landingPage)/_components/LatestBlog";
import OurPartners from "./(landingPage)/_components/OurPartners";
import OurProcessSection from "./(landingPage)/_components/Process";
import Services from "./(landingPage)/_components/Services";
import TestimonialsCarousel from './(landingPage)/_components/Testimonials';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurPartners />
      <ChooseUs />
      <Services />
      <OurProcessSection />
      <TestimonialsCarousel />
      <LatestBlog />
      <Platforms />
    </div>
  );
};

export default Home;
