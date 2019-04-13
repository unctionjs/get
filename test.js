/* eslint-disable no-undefined, no-magic-numbers */
import {test} from "tap";

import get from "./";

test("Object found key", ({same, end}) => {
  same(
    get("aaa")({aaa: "1"}),
    "1"
  );

  end();
});

test("Object missing key", ({same, end}) => {
  same(
    get("bbb")({aaa: "1"}),
    undefined
  );

  end();
});

test("undefined missing key", ({same, end}) => {
  same(
    get("bbb")(undefined),
    undefined
  );

  end();
});

test("Array missing key", ({same, end}) => {
  same(
    get(0)(["aaa"]),
    "aaa"
  );

  end();
});

test("String found key", ({same, end}) => {
  same(
    get(0)("abc"),
    "a"
  );

  end();
});

test("Map found key", ({same, end}) => {
  same(
    get("aaa")(new Map([["aaa", "aaa"]])),
    "aaa"
  );

  end();
});
