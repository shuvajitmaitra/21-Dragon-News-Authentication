import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../Context/AuthContext";
import { FaCalendar } from "react-icons/fa";

const LeftSideNav = () => {
  const [filter, setFilter] = useState([]);
  const { news } = useContext(NewsContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
    setFilter(news);
  }, [news]);
  console.log(14, filter);

  const handleCategory = (id) => {
    if (id > 0) {
      const filteredNews = news.filter(
        (filterNews) => filterNews.category_id === id
      );
      setFilter(filteredNews);
    } else {
      setFilter(news);
    }
  };

  return (
    <div>
      <h2
        className="text-xl font-semibold text-black
       pb-4"
      >
        All Category
      </h2>
      {categories.map((category) => (
        <h3
          className="text-lg w-full px-6 py-3 rounded-md font-medium text-gray-300 hover:bg-gray-300 hover:text-black"
          key={category.id}
          onClick={() => handleCategory(category.id)}
        >
          {category.name}
        </h3>
      ))}
      {filter.map((singleNews) => (
        <div
          key={singleNews.id}
          className="my-3"
        >
          {console.log(singleNews.author.published_date)}
          <img
            src={singleNews.image_url}
            className="block right-0 left-0 mx-auto"
          />
          <h2 className="text-lg font-semibold text-black py-3">
            {singleNews.title}
          </h2>
          <div className="flex items-center justify-between ">
            <h4>
              {singleNews.category_id ? (
                singleNews.category_id
              ) : (
                <i>{"anonymous"}</i>
              )}
            </h4>
            <p className="flex items-center gap-2">
              <FaCalendar /> {singleNews.author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
