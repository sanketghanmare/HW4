import ISorter from "../ISorter";

/**
 * Place your first Task 2 implementation of an efficient sorter (e.g. Merge sort, heap sort, quicksort, shell sort) here.
 */
export default class Sorter1<E> implements ISorter<E> {

    public sort(list: E[], compareFun: (e1: E, e2: E) => number): void {
        let heapSizeSort = list.length;
        let left: number;
        let right: number;
        let node: number;

        buildHeap(list);
        let temp;

        for (let i = list.length - 1; i >= 0; i--) {
            temp = list[0];
            list[0] = list[i];
            list[i] = temp;
            heapSizeSort--;
            heapify(list, 0);
        }


        function buildHeap(list) {
            for (let i = Math.floor((list.length) / 2); i >= 0; i--) {
                heapify(list, i);
            }
        }


        function getLeft(i: any) {
            return (i * 2);

        }

        function getRight(i: any) {
            return (i * 2 + 1);

        }

        function heapify(list, i) {
            left = getLeft(i);
            right = getRight(i);
            node = ((left <= heapSizeSort - 1) && (compareFun(list[left], list[i]) > 0))
                ? left
                : i;
            if ((right <= heapSizeSort - 1) && (compareFun(list[right], list[node]) > 0)) {
                node = right;
            }
            if (node != i) {
                let listElement = list[i];
                list[i] = list[node];
                list[node] = listElement;
                heapify(list, node);
            }
        }

    }
}