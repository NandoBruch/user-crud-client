import { mainApi } from "..";
import { ILoginRequest, ILoginResponse } from "./interface";

export const signin = async (
  payload: ILoginRequest
): Promise<ILoginResponse> => {
  const { data } = await mainApi.post("auth/signin", payload);
  return data;
};
