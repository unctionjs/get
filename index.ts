import isNil from "@unction/isnil";
import type from "@unction/type";

export default function get<K, V> (key: K) {
  return function getProperty (enumerable: EnumerableType<V, K>): V | K | null {
    if (isNil(enumerable)) {
      return null;
    }
    switch (type(enumerable)) {
      case "Object":
      case "Array":
      case "String": {
        return enumerable[key];
      }
      case "Map": {
        return enumerable.get(key);
      }
      case "Set": {
        return enumerable.has(key) ? key : null;
      }
      default: {
        return null;
      }
    }
  };
}
