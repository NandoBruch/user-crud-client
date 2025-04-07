import { IUserReponse } from "@/services/users/interface";

export interface IUserFormValues {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IUserFormProps {
  initialValues?: IUserReponse;
  onSubmit: (payload: IUserFormValues) => void;
}
