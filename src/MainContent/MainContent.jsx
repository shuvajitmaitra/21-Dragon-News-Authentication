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
            key={singleNews._id}
            className="my-7 border rounded-lg p-5"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-gray-300 rounded">
              <div className="flex items-center gap-3">
                <img
                  src={singleNews?.author?.img}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h4 className="font-semibold mb-1">
                    {singleNews?.author?.name ? (
                      singleNews?.author?.name
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
              {singleNews?.title}
            </h2>
            <img
              src={singleNews?.image_url}
              className="block right-0 left-0 mx-auto"
            />
            {singleNews?.details?.length < 200 ? (
              <p>{singleNews?.details}</p>
            ) : (
              <p>
                {singleNews?.details?.slice(0, 200)}
                {".... "}
                <Link to={`/news-details/${singleNews._id}`}>
                  <button className="text-orange-500 block">Read More</button>
                </Link>
              </p>
            )}

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
