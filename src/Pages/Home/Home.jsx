import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Marquee from "react-fast-marquee";
import MainContent from "../../MainContent/MainContent";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className=" flex items-center p-3  bg-gray-300">
        <button className="btn btn-secondary btn-sm rounded">Latest</button>
        <Marquee
          pauseOnHover={true}
          speed={100}
        >
          <Link
            to="/"
            className="font-bold"
          >
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </Marquee>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 my-14 gap-6 ">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <MainContent />
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
