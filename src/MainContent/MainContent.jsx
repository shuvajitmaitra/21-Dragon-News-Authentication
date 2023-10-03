import { useContext } from "react";
import { NewsContext } from "../Context/AuthContext";
import { FaBookmark, FaEye, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainContent = () => {
  const { news } = useContext(NewsContext);

  return (
    <div>
      <h2 className="text-xl font-semibold text-black">Dragon News Home</h2>
      <Link to="/newsDetails">
        {news.map((singleNews) => (
          <div
            key={singleNews.id}
            className="my-7 border rounded-lg p-5"
          >
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
                  <p>{singleNews.author.published_date}</p>
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
            <p>{singleNews.details}</p>
            <button className="text-orange-400">Read More</button>
            <div className="border-b-2 border-b-gray-200 my-4"></div>
            <div className="flex items-center justify-between ">
              <p>{singleNews.rating.number}</p>
              <p className="flex items-center gap-2">
                <FaEye /> {singleNews.total_view}
              </p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default MainContent;
