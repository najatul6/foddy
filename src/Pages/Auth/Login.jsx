import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full mx-auto ">
      <div className="max-w-md mx-auto py-10 px-4 border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold text-center mb-5">Log in</h1>
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <label className="text-lg capitalize font-medium " htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full py-1 px-3 bg-transparent focus:outline-double outline-white border border-deep-orange text-deep-black placeholder:text-deep-black rounded-md"
              placeholder="Enter your email address"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}
          </div>
          <div className="flex flex-col justify-start items-start gap-1 w-full mt-3">
            <label
              className="text-lg capitalize font-medium "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full py-1 px-3 bg-transparent focus:outline-double outline-white border border-deep-orange text-deep-black placeholder:text-deep-black rounded-md"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
          </div>

          <input
            className="w-full text-lg font-bold cursor-pointer py-2 px-2 md:px-6 uppercase bg-transparent  hover:bg-deep-orange border-deep-orange text-deep-orange rounded-md hover:text-white border  duration-300  font-cormorantGaramond flex justify-center items-center gap-1 mt-6"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="bg-[#a20131]">

</div> */
}
