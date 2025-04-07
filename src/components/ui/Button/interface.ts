import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  disabled?: boolean;
}
