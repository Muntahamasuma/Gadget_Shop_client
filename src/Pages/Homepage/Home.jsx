import Accorodion from "../../Components/Accorodion/Accorodion";
import Banner from "../../Components/Banner/Banner";
import FeatureProduct from "../../Components/FeatureProduct.jsx/FeatureProduct";
import UserReview from "../../Components/UserReview/UserReview";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto ">
      <div className="my-32">
        <h1 className="mb-16 text-center font-semibold text-2xl">Feature Product</h1>
      <FeatureProduct></FeatureProduct>
      </div>
      <div className="my-32">
        <h1 className="mb-16 text-center font-semibold text-2xl">User Review</h1>
        <UserReview></UserReview>
      </div>
      <div className="my-32">
        <h1 className="mb-16 text-center font-semibold text-2xl">Frequently Asked Quesions</h1>
        <Accorodion></Accorodion>
      </div>
      </div>
      
      
    </div>
  );
};

export default Home;