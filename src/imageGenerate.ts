import * as fs from "fs";
import * as path from "path";

export async function generateImage(prompt: string, size: string = "1024x1024") {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(errText);
  }

  const data: any = await response.json();
  const imageBase64 = data.data[0].b64_json;
  const imageBuffer = Buffer.from(imageBase64, "base64");

  // Create timestamp filename
  const timestamp = Date.now();
  const filename = `generated-${timestamp}.png`;

  const outputPath = path.join(process.cwd(), "images", filename);

  fs.writeFileSync(outputPath, imageBuffer);

  console.log(`Image saved to images/${filename}`);

  return outputPath;
}
