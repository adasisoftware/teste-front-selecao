import { Button } from "../../components/Button";

export function StringTestPage() {
  return (
    <div className="p-16 flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col gap-2">
        <label htmlFor="string-input" className="ml-1 text-white">
          String original:
        </label>
        <input
          type="text"
          name="string-input"
          id="string-input"
          placeholder="Digite algo..."
          className="w-96 h-12 px-4 py-2 border border-zinc-700 rounded-lg bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition"
        />
      </div>
      <div className="flex flex-col gap-8">
        <Button>Inverter string</Button>
        <Button>Ordenar em ordem alfabética</Button>
      </div>
      <div>
        <h2 className="mb-2 ml-1 text-white">String modificada:</h2>
        <div className="w-96 h-12 flex justify-center items-center bg-white shadow-2xl rounded-2xl">
          <p></p>
        </div>
      </div>
    </div>
  );
}
