import { FORTIOS_QUESTIONS_RAW } from './extracted.ts';
FORTIOS_QUESTIONS_RAW.forEach((q) => {
    let correctStr = q.options.filter(o => o.correct).map(o => o.label).join(' | ');
    console.log(`[ID ${q.id}] ${q.scenario} => ${correctStr}`);
});
