import { expect } from 'chai';
import SorterFactory from "../../src/SorterFactory";
const sorterFactory = new SorterFactory();

/**
 * This is not a very good test, but is provided as an example of how
 * to implement a test on the sorter. Implement your task 1 tests here, and feel
 * free to replace this one.
 */
describe("blackbox tests for sorter", () => {
    it("call sorter on small array of numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [4, 1, 2];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([1, 2, 4]);
    });

    it("call sorter on array having positive and negative numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [ -2, 7, 15, -14, 0, 15, 0, 7, -7, -4, -13, 5, 8, -14, 12];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-14,-14,-13,-7,-4,-2,0,0,5,7,7,8,12,15,15]);
    });

    it("call sorter on array having single number", () => {
        let sorter = sorterFactory.createSorter();
        let list = [ 0];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-14,-14,-13,-7,-4,-2,0,0,5,7,7,8,12,15,15]);
    });


    it("call sorter on small array of chars", () => {
        let sorter = sorterFactory.createSorter();
        let list = ['a', 'z', 'x'];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(['a', 'x', 'z']);
    });
})
