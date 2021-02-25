const Enhancer = require("./enhancer.js");
// test away!

it("works", () => {
    expect(4).toEqual(2 + 2);
});

describe("enhancer", () => {
    let item = {
        name: "kzarka staff",
        durability: 24,
        enhancement: 17,
    };
    it("Enhancer exists", () => {
        expect(Enhancer).toBeDefined();
    });

    it("repair item", () => {
        expect(Enhancer.repair(item)).toEqual({ ...item, durability: 100 });
    });
    it("enhancement success when enhancement not capped to 20", () => {
        expect(Enhancer.success(item)).toEqual({
            ...item,
            enhancement: item.enhancement + 1,
        });
    });
    it("enhancement success when enhancement capped to 20", () => {
        expect(Enhancer.success({ ...item, enhancement: 20 })).toEqual({
            ...item,
            enhancement: 20,
        });
    });
    it("enhancement fail when enhancement less than 15", () => {
        expect(Enhancer.fail({ ...item, enhancement: 12 })).toEqual({
            ...item,
            enhancement: 12,
            durability: item.durability - 5,
        });
    });
    it("enhancement fail when enhancement 15 or more", () => {
        expect(Enhancer.fail({ ...item, enhancement: 16 })).toEqual({
            ...item,
            enhancement: 16,
            durability: item.durability - 10,
        });
    });
    it("enhancement fail when enhancement 16 or more", () => {
        expect(Enhancer.fail({ ...item, enhancement: 17 })).toEqual({
            ...item,
            enhancement: 16,
            durability: item.durability - 10,
        });
    });
});
