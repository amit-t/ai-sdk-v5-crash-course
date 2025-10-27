import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";

const model = anthropic("claude-haiku-4-5");

const prompt =
	"Give me the first paragraph of a story about an imaginary planet.";

const stream = streamText({ model, prompt });

for await (const chunk of stream.textStream) {
	process.stdout.write(chunk);
}
