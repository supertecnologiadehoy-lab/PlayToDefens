import { FORTIOS_QUESTIONS_RAW } from './extracted.ts';
let count = 0;
FORTIOS_QUESTIONS_RAW.forEach((q) => {
    if (q.scenario.includes('Choose')) {
        console.log(`ID: ${q.id} | Scenario: ${q.scenario}`);
        q.options.forEach(o => {
            console.log(`   - ${o.label} (correct: ${o.correct})`);
        });
        count++;
    }
});
console.log(`Found ${count} questions`);
