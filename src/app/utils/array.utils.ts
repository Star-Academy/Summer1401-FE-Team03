export const generateRange = (start: number, stop: number, step: number): number[] =>
    Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);
