import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signInFlow } from "../types";
import { Controller, useForm } from "react-hook-form";

interface SignInCardProps {
  setState: (state: signInFlow) => void;
}
interface FormInputs {
  email: string;
  password: string;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login To Continue</CardTitle>
        <CardDescription>
          use your email or another service to Continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
          <Controller
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            }}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                disabled={false}
                placeholder="Email"
                type="text"
                className={errors.email ? "border-red-500" : ""}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors?.email?.message}
            </p>
          )}
          <Controller
            name="password"
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/,
                message:
                  "Password must contain at least 1 letter, 1 number, and 1 special character",
              },
            }}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                disabled={false}
                placeholder="Password"
                type="password"
                className={errors.password ? "border-red-500" : ""}
              />
            )}
          />
          {errors?.password && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors?.password?.message}
            </p>
          )}
          <Button className="w-full" size={"lg"} disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            variant={"outline"}
            size={"lg"}
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            Continue with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don't have an account?{" "}
          <span
            onClick={() => {
              setState("signUp");
            }}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
