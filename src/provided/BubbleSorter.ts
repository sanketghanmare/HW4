import ISorter from "../ISorter";
import SorterFactory from "../SorterFactory";

/**
 * BubbleSorter implements the ISorter interface using
 * the inefficient bubble-sort algorithm.
 *
 * Do not edit this file.
 */
export default class BubbleSorter<E> implements ISorter<E> {

    constructor() {
    }

    public sort(list: E[], compareFun: (e1: E, e2: E) => number): void {
        let n = list.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (compareFun(list[j], list[j + 1]) > 0) {
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
            }
        }
    }
}

// const sorterFactory = new SorterFactory("");
//
// let sorter = sorterFactory.createSorter();
// let list = [1,3,4,8,7];
// sorter.sort(list, (s1: number, s2: number) => s1 - s2);
//
// console.log(list)