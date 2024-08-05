import Carousel from "../components/Carousel";
import CollectionsCard from "../components/CollectionsCard";
import CollectionsIcon from "../components/CollectionsIcon";
import Products from "../components/Products";
import Offer from "../components/Offer";

const Home = () => {
    return (
        <>
            <Carousel />
            <CollectionsCard />
            <CollectionsIcon />
            <Products />
            <Offer />
        </>
    );
}

export default Home;