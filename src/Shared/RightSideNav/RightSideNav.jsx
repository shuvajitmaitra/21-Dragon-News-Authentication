import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import QZone1 from "../../assets/qZone1.png";
import QZone2 from "../../assets/qZone2.png";
import QZone3 from "../../assets/qZone3.png";

import Background from "../../assets/bg.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3">
        <h2
          className="text-xl font-semibold text-black
       pb-4"
        >
          Login With
        </h2>
        <p className="flex items-center justify-center gap-2 border border-black hover:border hover:border-blue-500 hover:text-blue-500 rounded-md w-full py-2">
          <FaGoogle></FaGoogle>
          <span className="font-semibold">Login With Google</span>
        </p>
        <p className="flex items-center justify-center gap-2 border border-black hover:border hover:border-blue-500 hover:text-blue-500 rounded-md w-full py-2">
          <FaGithub></FaGithub>
          <span className="font-semibold">Login With Github</span>
        </p>
      </div>
      <div className="py-8">
        <h3
          className="text-xl font-semibold text-black
       pb-4"
        >
          Find Us On
        </h3>
        <p className="flex items-center p-4 gap-2 border border-black font-medium  rounded-t-md w-full">
          <FaFacebook></FaFacebook>
          <span className="font-semibold">Facebook</span>
        </p>
        <p className="flex items-center p-4 gap-2 border-x border-black font-medium w-full">
          <FaTwitter></FaTwitter>
          <span className="font-semibold">Twitter</span>
        </p>
        <p className="flex items-center p-4 gap-2 border border-black font-medium  rounded-b-md w-full">
          <FaInstagram />
          <span className="font-semibold">Login With Github</span>
        </p>
      </div>
      <div className=" bg-gray-300 py-4 rounded-md">
        <h3 className="text-xl font-semibold mb-3 px-4 ">Q-Zone</h3>
        <div className="flex flex-col items-center gap-8">
          <img
            src={QZone1}
            alt=""
          />
          <img
            src={QZone2}
            alt=""
          />
          <img
            src={QZone3}
            alt=""
          />
        </div>
      </div>

      <div
        className="py-10 text-center  my-5"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h2 className="text-3xl font-bold text-white text-center px-8">
          Create an Amazing Newspaper
        </h2>
        <h3 className="text-white px-10 leading-6 text-xl my-6">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h3>
        <button className="btn btn-error rounded capitalize text-white font-semibold ">
          Learn More
        </button>
      </div>
    </div>
  );
};
``;
export default RightSideNav;
