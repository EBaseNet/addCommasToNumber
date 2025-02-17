import { toLocaleString } from "../src";

describe("toLocaleStringTest", () => {
  test("1000000000 to 1,000,000,000", () => {
    expect(toLocaleString(1000000000)).toBe("1,000,000,000");
  });
});
