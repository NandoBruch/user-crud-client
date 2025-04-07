import { IUserFormValues } from "@/components/features/forms/UserForm/interface";
import { useCreateUser } from "@/hooks/api/user/useCreateUser";
import { useUpdateUser } from "@/hooks/api/user/useUpdateUser";
import { Template } from "@components/business/Template";
import UserForm from "@components/features/forms/UserForm";
import { useGetUser } from "@hooks/api/user/useGetUser";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const FormPage = () => {
  const router = useRouter();
  const userId = useMemo(() => {
    const idParam = router.query.id;
    const id = Array.isArray(idParam) ? idParam[0] : idParam || undefined;
    return id ? +id : undefined;
  }, [router]);

  const { mutate: updateUser } = useUpdateUser();
  const { mutate: createUser } = useCreateUser();

  const { data, isLoading } = useGetUser(userId);

  const onSubmit = useCallback(
    (data: IUserFormValues) => {
      if (userId) {
        updateUser(data);
      } else {
        createUser(data);
      }
      router.push("/users");
    },
    [createUser, router, updateUser, userId]
  );

  return (
    <Template title="form" description="form description">
      <div className="container my-20">
        <h2 className="text-2xl font-bold my-4">
          {userId ? "Editar" : "Criar"} usuário
        </h2>
        {isLoading && <p className="text-2xl text-center ">Carregando...</p>}
        <UserForm onSubmit={onSubmit} initialValues={data} />
      </div>
    </Template>
  );
};

export default FormPage;
