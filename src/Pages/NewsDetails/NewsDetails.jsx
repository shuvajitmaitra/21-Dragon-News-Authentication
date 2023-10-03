import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import MainContent from "../../MainContent/MainContent";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-2 md:grid-cols-4 my-14 gap-6 ">
        <div className="col-span-3">
          <MainContent />
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
