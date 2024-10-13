import { test } from "vitest";
import { calculate } from "../calculate";


test("calculate addition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
})

test("calculate subtraction", ({ expect }) => {
    expect(calculate(7, 5, "-")).toBe(2);
})

test("calculate multiply", ({ expect }) => {
    expect(calculate(7, 5, "*")).toBe(35);
})

test("calculate divide", ({ expect }) => {
    expect(calculate(10, 5, "/")).toBe(2);
})

test("handle division by zero", ({ expect }) => {
    expect(calculate(10, 0, "/")).toBe("Cannot divide by zero");
})


