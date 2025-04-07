import { EQueryKeys } from "@/consts/queryKeys";
import { getUsers } from "@services/users/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  return useQuery({
    queryKey: [EQueryKeys.GET_USERS],
    queryFn: getUsers,
  });
};
