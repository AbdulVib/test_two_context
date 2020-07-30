import { getLetterMatchCount } from './helper'

describe('getLetterMatchCount', () => {
    const secretWord = 'party'
    it('returns correct count when there r no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    });
    it('returns correct count when there r 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    });
    it('returns correct count when there r duplicate matching letters', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    });
});

