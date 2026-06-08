import { FORTIOS_QUESTIONS_RAW } from './extracted.ts';
for (let i = 0; i < 15; i++) {
    const q = FORTIOS_QUESTIONS_RAW[i];
    console.log(`ID: ${q.id} | Scenario: ${q.scenario}`);
    q.options.forEach(o => {
        if (o.correct) console.log(`   - ${o.label} (correct: ${o.correct})`);
    });
}
