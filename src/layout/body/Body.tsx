import Hero from "../../components/hero/Hero";
import SurfaceInfo from "../../components/surface-Information/SurfaceInfo";
import Price from "../../components/price/Price";
import Proposal from "../../components/proposal/Proposal";
import Problems from "../../components/problems/Problems";
import Usage from "../../components/usage/Usage";
import Reviews from "../../components/reviews/Reviews";
import HowToOrder from "../../components/how-to-order/HowToOrder";
import TechnicalInfo from "../../components/technical-info/TechnicalInfo";
import Form from "../../components/form/Form";

const Body: React.FC = () => {
    return (
        <main>
            <Hero />
            <SurfaceInfo />
            <Price />
            <Proposal />
            <Problems />
            <Usage />
            <Reviews />
            <HowToOrder />
            <TechnicalInfo />
            <Form />
        </main>
    );
}

export default Body;