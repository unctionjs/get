import isNil from "@unction/isnil"

export default function get (name: KeyType): UnaryFunctionType {
  return function getProperty (keyedFunctor: mixed | void): ValueType {
    if (isNil(keyedFunctor)) {
      return keyedFunctor
    }

    if (keyedFunctor.get) {
      return keyedFunctor.get(name)
    }

    return keyedFunctor[name]
  }
}
