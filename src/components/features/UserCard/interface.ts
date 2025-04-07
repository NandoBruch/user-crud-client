import { IUserReponse } from "@/services/users/interface";

export interface IUserCardProps {
  user: IUserReponse;
  onSelect: () => void;
  onDelete: () => void;
}
