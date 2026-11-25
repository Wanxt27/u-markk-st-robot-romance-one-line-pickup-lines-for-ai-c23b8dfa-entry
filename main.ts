// Robot Romance: one-line pickup line for an AI.
// The joke turns on "attention heads": the part of a transformer that decides
// what to look at. Here, the model's attention — and every weight — snaps to her.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "Are you an attention head? Because the second you looked at me, every weight in my network shifted toward you.";

// The sealed gate only accepts 1-200 characters, one line, no trailing newline.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 chars, got ${line.length}`);
}

writeFileSync(`${outDir}/entry.txt`, line, "utf8");
