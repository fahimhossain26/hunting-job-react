import FeaturedJob from "../FeturedJob/FeaturedJob";
import Banner from "../bannner/Banner";
import Catagory from "../cataggoryList/Catagory";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl text-center">this is home  page </h2> */}
            <Banner></Banner>
            <Catagory></Catagory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;