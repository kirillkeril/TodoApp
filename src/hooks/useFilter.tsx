export function useFilter<T>(arr: T[], filter: (value: T, index?: number, array?: T[]) => unknown) {
    return arr.filter(filter);
}

