import MobileBankingHero from "../components/Hero";
import MobileBankingDownload from "../components/OurApp";
import Services from "../components/service/Services";
import MobileBankingServices from "../components/ServicesDescription";
import Testimonials from "../components/Testimonial";


const Home = () => {
    return (
        <div>
            <MobileBankingHero></MobileBankingHero>
            <Services></Services>
            <MobileBankingDownload></MobileBankingDownload>
            <MobileBankingServices></MobileBankingServices>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;