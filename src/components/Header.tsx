import type { HTMLAttributes } from "react";
import { Link } from "react-router";

type HeaderProps = HTMLAttributes<HTMLElement>;

export function Header({ className, ...rest }: HeaderProps) {
  return (
    <header
      {...rest}
      className={`h-16 w-full bg-white flex justify-around items-center gap-8 ${
        className ? className : ""
      }`}
    >
      <h1 className="font-bold text-2xl text-zinc-700">
        Teste de Seleção - Front-end
      </h1>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              className="px-4 py-2 bg-blue-900 rounded-2xl text-white hover:bg-blue-800 transition-colors"
              to="/inicio"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-blue-900 rounded-2xl text-white hover:bg-blue-800 transition-colors"
              to="/testes/array"
            >
              Array
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-blue-900 rounded-2xl text-white hover:bg-blue-800 transition-colors"
              to="/testes/string"
            >
              String
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
