import * as fs from "fs";
import * as path from "path";

export async function runWebSearch(query: string) {
  const result = `Web search results for: ${query}`;

  const outputPath = path.join(process.cwd(), "references", "web-search.txt");

  fs.writeFileSync(outputPath, result);

  return result;
}
