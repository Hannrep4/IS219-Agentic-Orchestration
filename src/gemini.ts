import * as fs from "fs";
import * as path from "path";

export async function callGemini(prompt: string): Promise<string> {
  const simulatedResponse = `
Gemini (Simulated Response)

Prompt: ${prompt}

This is a placeholder response while Gemini API integration is being finalized.
`;

  const outputPath = path.join(
    process.cwd(),
    "references",
    "ai_feedback",
    "gemini.txt"
  );

  fs.writeFileSync(outputPath, simulatedResponse);

  return simulatedResponse;
}
