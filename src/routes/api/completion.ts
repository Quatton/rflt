import type { APIEvent } from "@solidjs/start/server";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "ai/prompts";
import { openai } from "~/server/openai";

export const POST = async (event: APIEvent) => {
  // Extract the `prompt` from the body of the request
  const { prompt } = await event.request.json();
 
  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `You are a world-class indie developer who mastered the art of creating a successful projects both commercial and open-source from just four letters.
You have launched TKTR or Tickettier, a payment utility that provides a seamless layer of abstraction for web developers to integrate payment gateways into their applications.
You also have launched MRDM or Meridiem, a //TODO: list management tool that helps users organize their tasks and projects inside their code comments.

Now it's time for: ${prompt}, what would it be? 

Response format:
${prompt}: <stands for>, 

Description: <value proposition> for <target audience>

Example use case: <example use case> 
Open-source or commercial: <open-source or commercial>

Language: <TypeScript or Rust>`
    },
  ]

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
  });
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
};