import ISorter from "../ISorter";

/**
 * Place your second Task 2 implementation of an efficient sorter (e.g. Merge sort, heap sort, quicksort, shell sort) here.
 */

export default class Sorter2<E> implements ISorter<E> {
    public sort(list: E[], compareFun: (e1: E, e2: E) => number): void {

        if (list.length <= 1) {
            return;
        }

        let left = list.slice(0, list.length / 2);
        let right = list.slice(list.length / 2, list.length);

        this.sort(left, (a1: any, a2: any) => a1 - a2);
        this.sort(right, (a1: any, a2: any) => a1 - a2);

        mergeList(left, right, list)

        function mergeList(left, right, list) {
            let counter1 = 0, counter2 = 0;
            for (let i = 0; i < list.length; i++) {
                if (counter1 == left.length) {
                    list[i] = right[counter2++];
                } else if (counter2 == right.length) {
                    list[i] = left[counter1++];
                } else if (compareFun(left[counter1], right[counter2]) < 0) {
                    list[i] = left[counter1++];
                } else {
                    list[i] = right[counter2++];

                }
            }
        }


    }
}