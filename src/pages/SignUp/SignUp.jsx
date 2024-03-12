import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa6";
import signUp from "../../assets/SignUp.png";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const imgBB_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgBB_api_key}`;

const SignUp = () => {
  const [open, setOpen] = useState("password");
  const axiosPublic = useAxiosPublic();
  const { createUserWithEmail, updateUser } = useAuth();
  // console.log(user);
  // toggle password visibility function
  const togglePassword = () => {
    setOpen((pass) => (pass === "password" ? "text" : "password"));
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // img upload in imgbb and get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res?.data?.success) {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.pass,
        img: res?.data?.data?.display_url,
      };
      createUserWithEmail(userInfo?.email, userInfo?.password)
        .then(() => {
          updateUser(userInfo?.name, userInfo?.img).then(() => {
            reset();
            toast.success("Account Created Successfully!");
          });
        })
        .catch(() => {
          toast.error("Email already exist! Try another Email");
        });
    }
    console.log(data);
  };

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
                defaultValue=""
                {...register("name")}
                placeholder="your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="font-bold">Email:</label>
              <input
                defaultValue=""
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
                  defaultValue=""
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
                defaultValue=""
                type="file"
                {...register("image")}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white hover:bg-slate-600">
                SignUp
              </button>
              <p className="mt-6 text-center">
                If already have an account-
                <Link
                  to={"/login"}
                  className="underline text-2xl font-bold primary-color ml-2"
                >
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
