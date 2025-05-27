import { Button } from "../../components/Button";

export function ArrayTestPage() {
  const names = [
    "Oliver",
    "Emma",
    "Liam",
    "Ava",
    "Noah",
    "Sophia",
    "Elijah",
    "Isabella",
    "James",
    "Mia",
    "Benjamin",
    "Charlotte",
    "Lucas",
    "Amelia",
    "Mason",
    "Harper",
    "Logan",
    "Evelyn",
    "Ethan",
    "Abigail",
  ];

  return (
    <div className="flex justify-center items-center gap-24">
      <div>
        <h2 className="mb-2 ml-1 text-white">Array original:</h2>
        <div className="w-60 h-96 px-12 py-4 bg-white shadow-2xl rounded-2xl overflow-auto">
          <ol className="list-decimal">
            {names.map((name, idx) => {
              return <li key={idx}>{name}</li>;
            })}
          </ol>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Button>Ordenar asc.</Button>
        <Button>Ordenar desc.</Button>
        <Button>Inserir elem. no meio</Button>
      </div>
      <div>
        <h2 className="mb-2 ml-1 text-white">Array modificado:</h2>
        <div className="w-60 h-96 px-12 py-4 bg-white shadow-2xl rounded-2xl overflow-auto">
          <ol className="list-decimal"></ol>
        </div>
      </div>
    </div>
  );
}
