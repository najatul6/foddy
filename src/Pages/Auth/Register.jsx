import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Create an account
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <label className="text-lg capitalize font-medium " htmlFor="email">
            Full Name
          </label>
          <input
            className="w-full py-1 px-3 bg-transparent focus:outline-double outline-white border border-deep-orange text-deep-black placeholder:text-deep-black rounded-md"
            placeholder="Enter your full name"
            {...register("name", { required: "Name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p role="alert" className="text-[#a20131] w-full text-right">
              {errors.name.message}
            </p>
          )}
        </div>
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
          {errors.email && (
            <p role="alert" className="text-[#a20131] w-full text-right">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-start items-start gap-1 w-full mt-3">
          <label className="text-lg capitalize font-medium " htmlFor="password">
            Password
          </label>
          <input
            className="w-full py-1 px-3 bg-transparent focus:outline-double outline-white border border-deep-orange text-deep-black placeholder:text-deep-black rounded-md"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p role="alert" className="text-[#a20131] text-right w-full">
              {errors.password.message}
            </p>
          )}
        </div>

        <input
          className="w-full text-lg font-bold cursor-pointer py-2 px-2 md:px-6 uppercase bg-transparent  hover:bg-deep-orange border-deep-orange text-deep-orange rounded-md hover:text-white border  duration-300  font-cormorantGaramond flex justify-center items-center gap-1 mt-6"
          type="submit"
        />
      </form>
      <hr className="w-2/3 mx-auto border-2 border-white rounded-full" />
      <div className="text-center">
        <p className="">
            Already have an account? Go to 
          <Link
            to="/auth/login"
            className="font-medium hover:text-deep-orange hover:underline ml-2"
          >
           Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
