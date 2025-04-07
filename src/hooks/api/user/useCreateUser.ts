import { EQueryKeys } from "@/consts/queryKeys";
import { createUser } from "@/services/users/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [EQueryKeys.GET_USERS] });
      toast("Usuário deletado com sucesso", { type: "success" });
    },
    onError: (err) => {
      toast(err.message, { type: "error" });
    },
  });
};
