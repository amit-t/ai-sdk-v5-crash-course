// TODO: Choose a model. I recommend using the Google Gemini model:

import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

// gemini-2.0-flash-lite
const model = anthropic("claude-haiku-4-5");

const prompt = "What is the capital of France?";

const result = await generateText({ model, prompt });

console.log(result.text);
