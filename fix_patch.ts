import fs from 'fs';

let content = fs.readFileSync('src/data/gamesData.ts', 'utf8');

content = content.replace("export const PACKET_PUZZLE_CHALLENGES\nexport const PACKET_PUZZLE_CHALLENGES", "export const PACKET_PUZZLE_CHALLENGES");

fs.writeFileSync('src/data/gamesData.ts', content);
