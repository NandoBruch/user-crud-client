import { EQueryKeys } from "@/consts/queryKeys";
import { updateUser } from "@/services/users/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: async (data) => {
      toast("Usuário atualizado com sucesso", { type: "success" });
      await queryClient.invalidateQueries({ queryKey: [EQueryKeys.GET_USERS] });
      await queryClient.invalidateQueries({
        queryKey: [`${EQueryKeys.GET_USER}:${data.id}`],
      });
    },
    onError: (error) => {
      toast(error.message, { type: "error" });
    },
  });
};
