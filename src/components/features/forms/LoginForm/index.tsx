import Card from "@components/ui/Card";
import Input from "@components/ui/Input";
import { useForm } from "react-hook-form";
import { ILoginFormValues } from "./interface";
import { isEmail } from "@/helpers/formValidation";
import { DEFAULT_REQUIRED_MESSAGE } from "@/consts/form";
import Button from "@/components/ui/Button";
import { useLogin } from "@/hooks/api/auth/useLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ILoginFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const { mutate: login, isPending } = useLogin();

  const handleLogin = (data: ILoginFormValues) => {
    login(data);
  };

  return (
    <Card>
      <div className="w-sm h-98 flex flex-col justify-between">
        <h2 className="text-2xl">Iniciar sessão</h2>
        <form
          onSubmit={handleSubmit((data) => {
            handleLogin(data);
          })}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-6">
            <Input
              label="E-mail"
              {...register("email", {
                required: DEFAULT_REQUIRED_MESSAGE,
                validate: {
                  isEmail: (value) => isEmail(value) || "E-mail inválido",
                },
              })}
              hasError={!!errors?.email?.message}
              helperText={errors?.email?.message}
            />
            <Input
              type="password"
              label="Senha"
              {...register("password", {
                required: DEFAULT_REQUIRED_MESSAGE,
              })}
            />
          </div>
          <Button onClick={() => "clicked"} disabled={isPending} type="submit">
            Login
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default LoginForm;
