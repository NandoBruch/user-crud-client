import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  hasError?: boolean;
}
