import ISorter from "../ISorter";
import SorterFactory from "../SorterFactory";

/**
 * Place your second Task 2 implementation of an efficient sorter (e.g. Merge sort, heap sort, quicksort, shell sort) here.
 */
export default class Sorter2<E> implements ISorter<E> {
    public sort(list: E[], compareFun: (e1: E, e2: E) => number) : void {

        Mergesort(list)

        function Mergesort(myArray) {
            if (myArray.length <= 1) {
                return myArray;
            }
            let mid = Math.floor(myArray.length/2)
            let left = Mergesort(myArray.slice(0,mid))
            let right = Mergesort(myArray.slice(mid))
            return Merge(left,right)

        }

        function Merge(array1, array2) {
            let counter1 = 0
            let counter2 = 0

            let newArray = []

            if (compareFun(array1.length, array2.length)) {
                while(counter1 < array1.length && counter2 < array2.length) {
                    if (array1[counter1] < array2[counter2]) {
                        newArray.push(array1[counter1])
                        counter1++;
                    } else {
                        newArray.push(array2[counter2])
                        counter2++
                    }
                }
            }


            while (counter2 < array2.length) {
                newArray.push(array2[counter2])
                counter2++
            }

            while (counter1 < array1.length) {
                newArray.push(array1[counter1])
                counter1++
            }

            return newArray
        }

    }

    //  Mergesort(myArray) {
    //     if (myArray.length <= 1) {
    //         return myArray;
    //     }
    //     let mid = Math.floor(myArray.length/2)
    //     let left = this.Mergesort(myArray.slice(0,mid))
    //     let right = this.Mergesort(myArray.slice(mid))
    //     return this.Merge(left,right)
    //
    // }

    // Merge(array1, array2) {
    //     let counter1 = 0
    //     let counter2 = 0
    //
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

const sorterFactory = new SorterFactory("Sorter2");

let sorter = sorterFactory.createSorter();
let list = [1,3,4,8,7];
sorter.sort(list, (s1: number, s2: number) => s1 - s2);

console.log(list)
