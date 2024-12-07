import React, { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  const { signInUser, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // email password  login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    signInUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Your login successful");
      })
      .catch(() => toast.error("Your email or password is incorrect!"));
  };

  // google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success(" Your login successful by Google");
      })
      .catch(() => {
        toast.error("Enter your valid email");
      });
  };

  return (
    <div className=" px-4 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            <Fade cascade>Login now!</Fade>
          </h1>
        </div>
        <div className="card bg-base-100 shadow-2xl rounded-lg p-8">
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label mb-2 text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label mb-2 text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full p-3  text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full py-3 rounded-lg text-white font-semibold">
                Login
              </button>
            </div>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-primary w-full  mt-4 border border-primaryColor rounded-md flex items-center justify-center gap-2 text-primaryColor font-semibold text-xl mb-2"
          >
            <FaGoogle />
            Login with Google
          </button>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
