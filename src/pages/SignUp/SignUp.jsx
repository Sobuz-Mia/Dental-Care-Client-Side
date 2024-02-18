import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";
import signUp from "../../assets/SignUp.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [open, setOpen] = useState("password");
  // toggle password visibility function
  const togglePassword = () => {
    setOpen((pass) => (pass === "password" ? "text" : "password"));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero min-h-screen bg-[#E8F7FA] rounded-lg">
      <div className="hero-content flex-col md:flex-row gap-10">
        <div className="text-center lg:text-left">
          <img src={signUp} alt="" className="max-h-screen" />
        </div>
        <div className="card shrink-0 w-full max-w-sm border border-[#1970DC]">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center">
              <p className="text-3xl font-semibold primary-color">Signup</p>
            </div>
            <div className="form-control">
              <label className="font-bold">Name:</label>
              <input
                {...register("name")}
                placeholder="your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="font-bold">Email:</label>
              <input
                {...register("email")}
                placeholder="your email"
                type="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="font-bold">Password:</label>
              <p className="input input-bordered flex items-center justify-between">
                <input
                  {...register("pass")}
                  type={open}
                  placeholder="your password"
                />
                <FaEye className="text-xl" onClick={togglePassword} />
              </p>
            </div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="font-bold">Pick profile image</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white hover:bg-slate-600">
                SignUp
              </button>
              <p className="mt-6 text-center">
                If already have an account-
                <Link to={'/login'} className="underline text-2xl font-bold primary-color ml-2">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
