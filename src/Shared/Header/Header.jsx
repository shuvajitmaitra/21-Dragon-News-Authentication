import moment from "moment/moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center py-10">
      <img
        className="block right-0 left-0 mx-auto pb-5"
        src={logo}
        alt=""
      />
      <p>Journalism Without Fear or Favour</p>
      <p className="pt-2">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
