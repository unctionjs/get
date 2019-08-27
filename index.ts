import isNil from "@unction/isnil";

export default function get (name: unknown) {
  return function getProperty (keyedFunctor: Record<string, unknown> | Record<number, unknown> | Map<unknown, unknown> | unknown): null | unknown {
    if (isNil(keyedFunctor)) {
      return null as never;
    }

    if (typeof keyedFunctor === "object" || typeof keyedFunctor === "function") {
      if ("get" in keyedFunctor) {
        const dictionary: Map<unknown, unknown> = keyedFunctor! as any;

        return dictionary.get(name);
      } else if (typeof name === "number" && name in keyedFunctor) {
        const dictionary: Record<number, unknown> = keyedFunctor! as any;

        return dictionary[name];
      } else if (typeof name === "string" && name in keyedFunctor) {
        const dictionary: Record<string, unknown> = keyedFunctor! as any;

        return dictionary[name];
      }
    }

    return null as never;
  };
}
