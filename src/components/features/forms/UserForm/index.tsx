import Card from "@/components/ui/Card";
import { useForm } from "react-hook-form";
import { IUserFormProps, IUserFormValues } from "./interface";
import { formInitialValues } from "./const";
import Input from "@/components/ui/Input";
import { DEFAULT_REQUIRED_MESSAGE } from "@/consts/form";
import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { isEmail } from "@/helpers/formValidation";

const UserForm = ({ initialValues, onSubmit }: IUserFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserFormValues>({
    mode: "onBlur",
    defaultValues: formInitialValues,
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  return (
    <Card>
      <div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <Input
            label="E-mail"
            {...register("email", {
              required: DEFAULT_REQUIRED_MESSAGE,
              validate: {
                isEmail: (value) => isEmail(value) || "E-mail inválido",
              },
            })}
            hasError={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <Input
            label="Nome"
            {...register("firstName", { required: DEFAULT_REQUIRED_MESSAGE })}
            hasError={!!errors.firstName?.message}
            helperText={errors.firstName?.message}
          />
          <Input
            label="Sobrenome"
            {...register("lastName", { required: DEFAULT_REQUIRED_MESSAGE })}
            hasError={!!errors.lastName?.message}
            helperText={errors.lastName?.message}
          />
          <Input
            label="Telefone"
            {...register("phone", { required: DEFAULT_REQUIRED_MESSAGE })}
            hasError={!!errors.phone?.message}
            helperText={errors.phone?.message}
          />
          <Button>Salvar</Button>
        </form>
      </div>
    </Card>
  );
};

export default UserForm;
