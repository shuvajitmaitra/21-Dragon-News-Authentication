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

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold ">Login With</h3>
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
        <h3 className="text-lg font-semibold mb-3">Find Us On</h3>
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
      <div className="py-8">
        <h3 className="text-lg font-semibold mb-3">Q-Zone</h3>
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
  );
};
``;
export default RightSideNav;
