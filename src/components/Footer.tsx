import type { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>;

export function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer
      {...rest}
      className={`h-16 w-full bg-white flex justify-center items-center ${
        className ? className : ""
      }`}
    >
      <p className="font-semibold text-zinc-700">
        Copyright &copy; 2025 <span className="uppercase">Adasi</span> Software
        – CNPJ: 05.038.571/0001-39
      </p>
    </footer>
  );
}
