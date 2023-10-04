import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../Context/AuthContext";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";

const NewsDetails = () => {
  const { news } = useContext(NewsContext);

  const { id } = useParams();

  console.log(id);

  const singleNews = news.find((singleNews) => singleNews._id === id);

  console.log(singleNews);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-2 md:grid-cols-4 my-14 gap-6 ">
        <div className="col-span-3">
          <h2
            className="text-xl font-semibold text-black
       pb-4"
          >
            Dragon News
          </h2>
          <div className="border p-4 rounded-lg">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-300 rounded">
              <div className="flex items-center gap-3">
                <img
                  src={singleNews.author.img}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h4 className="font-semibold mb-1">
                    {singleNews.author.name ? (
                      singleNews.author.name
                    ) : (
                      <i>{"anonymous"}</i>
                    )}
                  </h4>
                  <p>{singleNews?.author?.published_date?.split(" ")[0]}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaBookmark />
                <FaShare />
              </div>
            </div>
            <h2 className="text-xl font-bold text-black py-3">
              {singleNews.title}
            </h2>
            <img
              src={singleNews.image_url}
              className="block right-0 left-0 mx-auto"
            />
            <p className="py-4">{singleNews.details}</p>

            <div className="border-b-2 border-b-gray-200 my-4"></div>
            <div className="flex items-center justify-between ">
              <p>{singleNews.rating.number}</p>
              <p className="flex items-center gap-2">
                <FaEye /> {singleNews.total_view}
              </p>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
