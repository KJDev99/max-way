import { Button } from "@radix-ui/themes";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import apiClient from "../service/api-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";

const Form = z.object({
  username: z
    .string()
    .min(3, { message: "Ism 3 ta harfdan ko'p bo'lishi kerak" })
    .max(255),
  email: z.string().email({ message: "Email kiritishinggiz kerak" }).min(10),
  password: z.string().min(8),
  confirm_password: z.string().min(8),
});

type Form = z.infer<typeof Form>;

const SignUpForm = ({ onLoggedIn }: { onLoggedIn: () => void }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(Form) });

  const [isShow, setShow] = useState(false);
  const codeRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    apiClient
      .post("users/signup/", data)
      .then((res) => {
        if (res.data.access) {
          localStorage.setItem("app-maxway-token", "Bearer " + res.data.access);
        }
      })
      .catch((err) => console.error(err.message));
  };

  const verifyUser = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data = {
      code: codeRef.current?.value,
    };

    onLoggedIn();

    // apiClient
    //   .post("users/verify/", { code: codeRef.current?.value })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err.message));

    fetch("http://127.0.0.1:8000/api/v1/users/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("app-maxway-token"),
      },
      body: JSON.stringify(data),
    });
  };

  if (isShow) {
    return (
      <form onSubmit={verifyUser}>
        <div className="w-1/4 mb-3 flex flex-col">
          <label htmlFor="code">Code:</label>
          <input
            className="border rounded-md"
            type="text"
            name="code"
            id="code"
            ref={codeRef}
          />
        </div>

        <Button className="w-1/4">Verify</Button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        reset();
        onSubmit(data);
        setShow(isShow);
      })}
    >
      <div className="w-1/4 mb-3 flex flex-col">
        <label htmlFor="username">Username:</label>
        <input
          className="border rounded-md"
          type="text"
          {...register("username")}
          name="username"
          id="username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        )}
      </div>
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
      <div className="w-1/4 mb-3 flex flex-col">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input
          className="border rounded-md"
          type="password"
          {...register("confirm_password")}
          name="confirm_password"
          id="confirm_password"
        />
        {errors.confirm_password && (
          <p className="text-red-500 text-sm">
            {errors.confirm_password?.message}
          </p>
        )}
      </div>
      <Button className="w-1/4">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
