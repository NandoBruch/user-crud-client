import { forwardRef } from "react";
import { IInputProps } from "./interface";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, hasError, helperText = "", ...props }, ref) => (
    <div className="group relative">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        {...props}
        id={id}
        ref={ref}
        className={`block peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg ${
          hasError ? "border  border-red-500" : null
        }`}
      />
      <span
        className={`block pt-1 text-xs font-semibold text-gray-500  transition-all duration-200 ease-in-out ${
          helperText
            ? "opacity-100 max-h-10"
            : "opacity-0 max-h-0 overflow-hidden"
        } `}
      >
        {helperText}
      </span>
    </div>
  )
);

export default Input;
