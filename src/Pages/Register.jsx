import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../Login_Register/GoogleLogin";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password);
    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm font-light">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm font-light">
                  Password is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500 text-sm font-light">
                  Password must have at least 6 Characters
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confrim Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("confrimPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Your Password do not match";
                    }
                  },
                })}
              />
              {errors.confrimPassword && (
                <span className="text-red-500 text-sm font-light">
                  Both Passwords must have a match
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select className="select select-bordered w-full max-w-xs"
              {...register("role", { required: true })}>
                <option disabled selected>
                  Choose an option
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <span className="text-red-500 text-sm font-light">
                  You must select a Role
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <GoogleLogin />
            <p className="my-2 font-light text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
