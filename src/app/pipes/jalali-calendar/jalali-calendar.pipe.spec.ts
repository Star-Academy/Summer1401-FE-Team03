import {JalaliCalendarPipe} from './jalali-calendar.pipe';

describe('JalaliCalendarPipe', () => {
    const testValue: number = 1660284418074;
    const testResult: string = '۱۴۰۱/۵/۲۱';

    it('should create an instance', () => {
        const pipe = new JalaliCalendarPipe();
        expect(pipe).toBeTruthy();
    });

    it('should transform millisecond object to locale string', () => {
        const pipe = new JalaliCalendarPipe();
        const pipeResult = pipe.transform(testValue);
        expect(pipeResult).toEqual(testResult);
    });
});
