import ISorter from "../ISorter";

/**
 * Place your first Task 2 implementation of an efficient sorter (e.g. Merge sort, heap sort, quicksort, shell sort) here.
 */
export default class Sorter1<E> implements ISorter<E> {
    public sort(list: E[], compareFun: (e1: E, e2: E) => number) : void {


        for (let i = 0; i < list.length; i++) {
            let minIndex = i;
            for (let j = i+1; j < list.length; j++) {
                if (list[j] < list[minIndex]) {
                    minIndex = j
                }
            }
            if (i !== minIndex) {
                let temp = list[minIndex];
                list[minIndex] = list[i]
                list[i] = temp;
            }
        }


        // let mid = Math.floor(list.length/2)
        //
        //     let left = this.sort(list.slice(0,mid))
        //     let right = this.sort(list.slice(mid))
        //     Merge(left,right)
        //
        //
        //
        // function Merge(array1: any, array2: any) {
        //     let counter1 = 0
        //     let counter2 = 0
        //     let newArray = []
        //
        //     while(counter1 < array1.length && counter2 < array2.length) {
        //         if (array1[counter1] < array2[counter2]) {
        //             newArray.push(array1[counter1])
        //             counter1++;
        //         } else {
        //             newArray.push(array2[counter2])
        //             counter2++
        //         }
        //     }
        //
        //     while (counter2 < array2.length) {
        //         newArray.push(array2[counter2])
        //         counter2++
        //     }
        //
        //     while (counter1 < array1.length) {
        //         newArray.push(array1[counter1])
        //         counter1++
        //     }
        //
        //     return newArray
        // }

    }
}
