import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import { api } from "~/lib/api";

export default function Home() {
  const hello = createAsync(() => api.example.hello.query("world"));
  return (
    <main class="min-h-dvh flex flex-col items-center justify-center gap-8">
      <Title>RFLT</Title>
      <h1 class="font-extralight uppercase text-7xl">RFLT</h1>

      <div class="text-center text-pretty max-w-md space-y-2">
        <p>
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
        </p>
      </div>
    </main>
  );
}
