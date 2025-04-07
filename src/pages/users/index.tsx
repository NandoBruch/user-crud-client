import { Template } from "@/components/business/Template";
import UserCard from "@/components/features/UserCard";
import Button from "@/components/ui/Button";
import { useDeleteUser } from "@/hooks/api/user/useDeleteUser";
import { useGetUsers } from "@hooks/api/user/useGetUsers";
import { useRouter } from "next/router";
import { Fragment } from "react";

const UsersPage = () => {
  const { data: users, isLoading, refetch, isError, isSuccess } = useGetUsers();
  const { mutate: deleteUser } = useDeleteUser();
  const router = useRouter();

  const onDelete = (id?: number) => {
    deleteUser(id);
  };

  return (
    <Template title="Usuários" description="Lista de usuários">
      <div className="container my-8">
        {isLoading && <p className="text-2xl text-center ">Carregando...</p>}
        {isError && (
          <div className="h-full  flex flex-col items-center justify-center">
            <p>Ocorreu um erro ao carregar usuários</p>
            <Button onClick={() => refetch()}>Tentar novamente</Button>
          </div>
        )}
        {isSuccess && (
          <Fragment>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-4xl">Usuários</h1>
              <Button onClick={() => router.push("/users/form")}>
                Novo usuário
              </Button>
            </div>
            <div className="flex justify-start gap-16 my-16 flex-wrap">
              {users?.map((user) => (
                <UserCard
                  key={user.id}
                  onSelect={() => router.push(`/users/form/${user.id}`)}
                  user={user}
                  onDelete={() => onDelete(user.id)}
                />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </Template>
  );
};

export default UsersPage;
