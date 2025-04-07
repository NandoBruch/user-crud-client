import { EQueryKeys } from "@/consts/queryKeys";
import { getUserById } from "@/services/users/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id?: number) => {
  return useQuery({
    queryKey: [EQueryKeys.GET_USER, id],
    queryFn: () => {
      if (!id) return;
      return getUserById(+id);
    },
    staleTime: 1000 * 60,
    enabled: !!id,
  });
};
