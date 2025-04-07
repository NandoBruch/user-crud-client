import { IButtonProps } from "./interface";

const Button = ({ children, disabled, ...props }: IButtonProps) => (
  <button
    className={`rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300 cursor-pointer ${
      disabled
        ? "bg-gray-200 text-gray-900 border-none cursor-not-allowed"
        : null
    }`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
