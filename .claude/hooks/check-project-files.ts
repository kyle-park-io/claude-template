import * as fs from 'fs';
import * as path from 'path';

const cwd = process.cwd();

const MISSING: string[] = [];

// Check README files
const readmeFiles = ['README.md', 'README.kr.md', 'README.zh.md'];
for (const file of readmeFiles) {
  if (!fs.existsSync(path.join(cwd, file))) {
    MISSING.push(file);
  }
}

// Check LICENSE
if (!fs.existsSync(path.join(cwd, 'LICENSE'))) {
  MISSING.push('LICENSE');
}

// Check PROJECT.md
if (!fs.existsSync(path.join(cwd, 'PROJECT.md'))) {
  MISSING.push('PROJECT.md');
}

if (MISSING.length > 0) {
  const message = [
    'Missing project files detected:',
    ...MISSING.map((f) => `  - ${f}`),
    '',
    'Please create the missing files following the conventions in .claude/rules/.',
  ].join('\n');

  console.log(
    JSON.stringify({
      systemMessage: message,
    }),
  );
}
