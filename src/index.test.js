import {getMonth} from "./index.js";

describe('Test getMonth', () => {
    it('should opperate correctly ', function () {
        expect(getMonth(6)).toBe('Июнь')
    });
    it('should opperate correctly err', function () {
        expect(getMonth(17)).toBe('Данные неверны')
    });
    it('should opperate correctly number.isInteger', function () {
        expect(getMonth('abcd')).toBe('Не является числом')
    });
})