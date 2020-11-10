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
        let list = [0];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([0]);
    });


    it("call sorter on small array of chars", () => {
        let sorter = sorterFactory.createSorter();
        let list = ['a', 'z', 'x'];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(['a', 'x', 'z']);
    });

    it("call sorter on small array of strings", () => {
        let sorter = sorterFactory.createSorter();
        let list = [ "Quiz", "Practice", "Gblogs", "Coding"];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(["Coding", "Gblogs", "Practice", "Quize"]);
    });

    it("call sorter on small array of names small and big strings", () => {
        let sorter = sorterFactory.createSorter();
        let list = [ "Dog",
            "cat",
            "Alligator",
            "Cheetah",
            "rat",
            "moose",
            "cow",
            "mink",
            "porcupine",
            "Dung beetle",
            "camel",
            "steer",
            "bat",
            "hamster",
            "horse",
            "Colt",
            "Bald eagle",
            "frog",
            "rooster"];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members(["Alligator","Bald eagle" ,"bat", "camel" ,"cat" ,"Cheetah" ,
            "Colt", "cow", "Dog", "Dung beetle", "frog", "hamster", "horse", "mink", "moose", "porcupine", "rat", "rooster", "steer"]);
    });



    it("call sorter on array of random small and big integers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [0,132413,34,-98,12341232543,343,55,-9132154123,100,1,1,1234,-1,-1];
        sorter.sort(list, (s1: number, s2: number) => s1 - s2);
        expect(list).to.have.ordered.members([-9132154123,-98,-1,-1,0,1,1,34,55,100,343,1234,132413,12341232543]);
    });

    it("call sorter on array of decending numbers", () => {
        let sorter = sorterFactory.createSorter();
        let list = [10,9,8,7,6,5,4,3,2,1,0];
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


})
