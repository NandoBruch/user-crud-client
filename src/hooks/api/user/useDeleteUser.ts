import { EQueryKeys } from "@/consts/queryKeys";
import { deleteUser } from "@/services/users/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [EQueryKeys.GET_USERS],
      });

      toast("Usuário criado com sucesso", { type: "success" });
    },
    onError: (err) => {
      toast(err.message, { type: "error" });
    },
  });
};
