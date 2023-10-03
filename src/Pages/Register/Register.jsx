import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const handleRegister = (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  console.log(form.get("email"));
  console.log(form.get("password"));
};

const Register = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <Navbar></Navbar>
      <h3 className="text-3xl text-center font-bold">Register now!</h3>
      <form
        onSubmit={handleRegister}
        className="md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photoURl"
            name="photoURl"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className=" text-center">
        Already have an account{" "}
        <Link
          to="/login"
          className="text-blue-400"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Register;
