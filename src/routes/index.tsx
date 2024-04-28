import { Title } from "@solidjs/meta";
import { createSignal, For } from "solid-js";
import { FLTR } from "~/components/4ltr";


export default function Home() {

  const [count, setCount] = createSignal(4);

  return (
    <main class="min-h-dvh flex flex-col items-center justify-center gap-8">
      <Title>RFLT</Title>

      <button
            onClick={() => setCount(count() + 1)}
            class="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add
          </button>
      
      <div class="grid grid-cols-4">
       <For each={Array.from({ length: count() })}>
          {(_, index) => (
            <FLTR />
          )}
        </For>

         
      </div>
    </main>
  );
}
