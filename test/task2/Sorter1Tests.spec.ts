import { expect } from 'chai';
import SorterFactory from "../../src/SorterFactory";
const sorterFactory = new SorterFactory("Sorter1");


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
describe("whitebox tests for sorter1", () => {
    it("call sorter on small array of numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [4, 1, 2];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([1, 2, 4]);
    });
})

