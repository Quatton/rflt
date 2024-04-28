
import { useCompletion } from "ai/solid";
import { createSignal } from "solid-js";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function generateRandomString(length: number) {
  return Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }).join("");
}
export function FLTR() {

  const { complete, completion } = useCompletion({
    api: "/api/completion",
  })

  async function generate() {
    setFourLetters(generateRandomString(4));
    const response = await complete(fourLetters());
  }

  const [fourLetters, setFourLetters] = createSignal("RFLT");


  return <div>
    <h1 class="font-extralight uppercase text-7xl">{fourLetters()}</h1>
        <button onClick={generate} class="px-4 py-2 bg-blue-500 text-white rounded-md">
          Generate
        </button>
        <div class="text-center text-pretty max-w-md space-y-2">
         {fourLetters() !== "RFLT" ? <>{
          typeof completion() === "string"
          ? <p>{completion()!.split("\n").map((line) => <>{line}<br /></>)
          }</p>
          : <p>Generating...</p>
        }</>
         : <><p>
            Random Four Letters Thing is a simple web app that generates random
            four-letter strings.
          </p>
          <p>
            Making apps with four-letter strings has always been my characteristic
            when doing a side project. I've made a lot of apps with four-letter
            strings, like the{" "}
            <a
              href="https://github.com/Quatton/tktr"
              target="_blank"
              rel="noopener noreferrer"
              class="underline text-blue-500 px-0.5"
            >
              tktr
            </a>
            <a
              href="https://github.com/Quatton/mrdm-cli"
              target="_blank"
              rel="noopener noreferrer"
              class="underline text-blue-500 px-0.5"
            >
              mrdm
            </a>
            , and this exact one.
          </p></>}
        </div>
  </div>
}