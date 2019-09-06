/* eslint-disable no-undefined, no-magic-numbers */
import get from "./index";

test("Object found key", () => {
  expect(get("aaa")({aaa: "1"})).toEqual("1");
});

test("Object missing key", () => {
  expect(get("bbb")({aaa: "1"})).toEqual(undefined);
});

test("undefined missing key", () => {
  expect(get("bbb")(undefined)).toEqual(undefined);
});

test("Array missing key", () => {
  expect(get(0)(["aaa"])).toEqual("aaa");
});

test("String found key", () => {
  expect(get(0)("abc")).toEqual("a");
});

test("Map found key", () => {
  expect(get("aaa")(new Map([["aaa", "aaa"]]))).toEqual("aaa");
});
