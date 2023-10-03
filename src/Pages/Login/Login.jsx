import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const handleSignIn = (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  console.log(form.get("email"));
  console.log(form.get("password"));
};

const Login = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <Navbar></Navbar>
      <h3 className="text-3xl text-center font-bold">Login now!</h3>
      <form
        onSubmit={handleSignIn}
        className="md:w-3/4 lg:w-1/2 mx-auto"
      >
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className=" text-center">
        Do not have an account{" "}
        <Link
          to="/register"
          className="text-blue-400"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
