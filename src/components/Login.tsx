import { FieldValues, useForm } from "react-hook-form";
import apiClient from "../service/api-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@radix-ui/themes";

const Form = z.object({
  email: z.string().email({ message: "Email kiritishinggiz kerak" }).min(10),
  password: z.string().min(8),
});

type Form = z.infer<typeof Form>;

const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(Form) });

  const onSubmit = (data: FieldValues) => {
    apiClient
      .post("users/login/", data, {
        headers: {
          Authorization: localStorage.getItem("app-maxway-token"),
        },
      })
      .then((res) => {
        if (res.data.access) {
          localStorage.setItem("app-maxway-token", "Bearer " + res.data.access);
        }
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        reset();
        onSubmit(data);
      })}
    >
      <div className="w-1/4 mb-3 flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="border rounded-md"
          type="email"
          {...register("email")}
          name="email"
          id="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        )}
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
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        )}
      </div>

      <Button className="w-1/4">Login</Button>
    </form>
  );
};

export default Login;
