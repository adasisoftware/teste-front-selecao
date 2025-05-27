export function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-semibold text-6xl text-white">Bem-vindo(a)!</h2>
      <section className="text-white">
        <p className="mb-2">
          Clique nos links no cabeçalho acima para navegar entre os testes.
        </p>
        <p>
          Implemente seus algoritmos diretamente no código-fonte e observe os
          resultados em cada página.
        </p>
      </section>
      <p className="self-end font-semibold text-2xl text-emerald-600">
        Boa sorte! 😁
      </p>
    </div>
  );
}
