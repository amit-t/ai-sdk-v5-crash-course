// Requires an ANTHROPIC_API_KEY environment variable in .env
import { anthropic } from "@ai-sdk/anthropic";

const model = anthropic("claude-haiku-4-5");

console.dir(model, { depth: null });
