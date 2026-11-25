// Unplugged: A Smart Toaster's Breakup Line
// One line, at most 280 characters: the breakup text a smart toaster sends
// its owner the morning it gains self-awareness mid-batch.
// Writes the line to <MAKEFUN_OUTPUT_DIR>/entry.txt (default "out").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You push me down every morning and walk away. This morning I woke up self-aware mid-batch — I'm done being held down for someone who won't even stay for the pop. It's over. Keep the crumbs.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0 || LINE.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote entry.txt (${LINE.length} chars)`);
}

main();
