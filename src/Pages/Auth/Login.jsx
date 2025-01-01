import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full mx-auto">
      <div className="max-w-md mx-auto py-10 px-4 border">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold text-center mb-5">Log in</h1>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label className="text-lg capitalize font-medium" htmlFor="email">Email Address</label>
            <input
              className="w-full py-1 px-3 bg-transparent focus:outline-dashed outline-deep-orange border border-deep-orange"
              placeholder="Enter your email address"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}
          </div>

          <input type="submit" />
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
