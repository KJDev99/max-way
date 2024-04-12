import { Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      
      <div className="w-1/4 mb-3 flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="border rounded-md"
          type="email"
          {...register("email")}
          name="email"
          id="email"
        />
      </div>
      <div className="w-1/4 mb-3 flex flex-col">
        <label htmlFor="password">Password:</label>
        <input
          className="border rounded-md"
          type="password"
          {...register("password")}
          name="password"
          id="password"
        />
      </div>
    
      <Button className="w-1/4">Login</Button>
    </form>
  );
};

export default LoginForm;
