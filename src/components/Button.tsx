import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`px-4 py-2 bg-amber-600 rounded-2xl text-zinc-800 font-semibold text-md cursor-pointer hover:bg-amber-500 transition-colors ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}
