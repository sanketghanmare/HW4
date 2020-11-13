import {expect} from 'chai';
import SorterFactory from "../../src/SorterFactory";

const sorterFactory = new SorterFactory("Sorter2");


/**
 * This is not a very good test, but is provided as an example of how
 * to implement a test on the sorter. Implement your task 2 tests for sorter1 here, and feel
 * free to replace this one.
 *
 * Also feel free to copy any of your task 1 blackbox tests here to get started. Which is to
 * say: no penalty points for code clones/duplicate tests in this sense. Although using
 * "Parameterized tests" can be a better way to organize these tests to not need
 * to copy/paste them, that is probably the topic for a homework assignment next semester!
 */
describe("whitebox tests for sorter2", () => {
    it("call sorter on small array of numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [4, 1, 2];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([1, 2, 4]);
    });

    it("call sorter on array having positive and negative numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [-2, 7, 15, -14, 0, 15, 0, 7, -7, -4, -13, 5, 8, -14, 12];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-14, -14, -13, -7, -4, -2, 0, 0, 5, 7, 7, 8, 12, 15, 15]);
    });

    it("call sorter on array having single number", () => {
        let sorter = sorterFactory.createSorter();
        let list = [0];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([0]);
    });

    it("call sorter on array of random small and big integers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [0, 132413, 34, -98, 12341232543, 343, 55, -9132154123, 100, 1, 1, 1234, -1, -1];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-9132154123, -98, -1, -1, 0, 1, 1, 34, 55, 100, 343, 1234, 132413, 12341232543]);
    });

    it("call sorter on array of decending numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("call sorter on array of floating numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [0.0, 1.2, 0.2, 3.5, 0.54, 5.4, 6.5, 0.077, 0.0009];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([0.0, 0.0009, 0.077, 0.2, 0.54, 1.2, 3.5, 5.4, 6.5]);
    });

    it("call sorter on array of negative floating numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [0.0, -1.2, -0.2, -3.5, -0.54, -5.4, -6.5, -0.077, 0.0009];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-6.5, -5.4, -3.5, -1.2, -0.54, -0.2, -0.077, 0, 0.0009]);
    });

    it("call sorter on array of same numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });

    it("call sorter on array of two numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [1, 0];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([0, 1]);
    });


    it("call sorter on big array of random numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [
            4252, 5525, 9840, -6266, -3169, -7008, 7540, 6528, 5356, -302,
            -5760, -2099, -7831, 4237, -394, -3392, -6861, -5224, -7160, 145,
            -7654, -1733, -7467, -9902, 1403, 8933, 7362, 5519, 9878, -5926,
            7667, 9496, 4792, -8136, 886, 6555, -8720, 7922, 6305, 8725,
            3793, 558, 8486, 4219, -8421, 7444, -4193, 3543, 5341, -9827
        ];

        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-9902,
            -9827, -8720, -8421, -8136, -7831, -7654, -7467, -7160, -7008, -6861,
            -6266, -5926, -5760, -5224, -4193, -3392, -3169, -2099, -1733, -394,
            -302, 145, 558, 886, 1403, 3543, 3793, 4219, 4237, 4252, 4792, 5341,
            5356, 5519, 5525, 6305, 6528, 6555, 7362, 7444, 7540, 7667, 7922,
            8486, 8725, 8933, 9496, 9840, 9878
        ]);
    });

    it("call sorter on array of string numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = ['5', '4', '3', '2', '1', '0'];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(['0', '1', '2', '3', '4', '5']);
    });

    it("call sorter on array of random string numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = ['10000', '77', '100', '-1', '5', '4', '3', '2', '1', '0'];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(['-1', '0', '1', '2', '3', '4', '5', '77', '100', '10000']);
    });

    it("call sorter on array of random float string numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = ['10000.01', '77.2', '100.12', '-1.1', '5.5', '4.4', '3.1', '2.4', '1.12', '0.1'];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(['-1', '0', '1', '2', '3', '4', '5', '77', '100', '10000']);
    });
})
