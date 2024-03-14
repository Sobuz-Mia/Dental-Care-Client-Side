import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import signUp from "../../assets/SignUp.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const SignIn = () => {
  const [open, setOpen] = useState("password");
  const { signInUser } = useAuth();
  // toggle password visibility function
  const togglePassword = () => {
    setOpen((pass) => (pass === "password" ? "text" : "password"));
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.pass;
    signInUser(email, password)
      .then(() => {
        reset();
        toast.success("Log in successfully");
      })
      .catch(() => {
        toast.error("Invalid Email/Password!");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[#E8F7FA] rounded-lg">
        <div className="hero-content flex-col md:flex-row gap-10">
          <div className="text-center lg:text-left">
            <img src={signUp} alt="" className="max-h-screen" />
          </div>
          <div className="card shrink-0 w-full max-w-sm border border-[#1970DC]">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <p className="text-3xl font-semibold primary-color my-4">
                  Login Account
                </p>
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
              <div className="form-control mt-6">
                <button className="btn bg-primary text-white hover:bg-slate-600 mb-4">
                  Login
                </button>
                <div className="divider divider-accent text-xl font-bold">OR</div>
                <button className="flex items-center gap-2 justify-center text-lg border rounded-lg border-[#22B2D8] py-3"> <FcGoogle className="text-2xl"/>Continue With Google </button>
                <p className="mt-6 text-center">
                  Do not have an account-
                  <Link
                    to={"/signUp"}
                    className="underline text-2xl font-bold primary-color ml-2"
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
