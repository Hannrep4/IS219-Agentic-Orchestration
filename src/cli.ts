import * as dotenv from "dotenv";
dotenv.config();

import { runWebSearch } from "./webSearch";
import { callGemini } from "./gemini";
import { generateImage } from "./imageGenerate";

const args = process.argv.slice(2);

async function main() {
  const command = args[0];

  if (command === "web-search") {
    await runWebSearch(args[1]);
  }

  if (command === "gemini") {
    await callGemini(args[1]);
  }

    if (command === "image-generate") {
        const prompt = args[1];

        const sizeIndex = args.indexOf("--size");
        const size = sizeIndex !== -1 ? args[sizeIndex + 1] : "1024x1024";

        await generateImage(prompt, size);
    }
}

main();
