import { IUserRequest, IUserReponse } from "./interface";
import { mainApi } from "..";

export const getUserById = async (id: number): Promise<IUserReponse> => {
  const { data } = await mainApi.get<IUserReponse>(`/users/${id}`);
  return data;
};

export const getUsers = async (): Promise<IUserReponse[]> => {
  const { data } = await mainApi.get<IUserReponse[]>("/users");
  return data;
};

export const updateUser = async (
  payload: IUserRequest
): Promise<IUserReponse> => {
  const { id, ...user } = { ...payload };
  const { data } = await mainApi.put<IUserReponse>(`/users/${id}`, user);
  return data;
};

export const createUser = async (
  payload: IUserRequest
): Promise<IUserReponse> => {
  const { data } = await mainApi.post<IUserReponse>(`/users`, payload);
  return data;
};

export const deleteUser = async (id?: number): Promise<void> => {
  await mainApi.delete<void>(`/users/${id}`);
};
