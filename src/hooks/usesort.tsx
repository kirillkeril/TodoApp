export function useSort<T>(arr: T[], sort: (a: T, b: T) => number) {
    return arr.sort(sort);
}