import isNil from "@unction/isnil";
export default function get (name) {
  return function getProperty (keyedFunctor) {
    if (isNil(keyedFunctor)) {
      return keyedFunctor;
    }

    if (keyedFunctor.get) {
      return keyedFunctor.get(name);
    }

    return keyedFunctor[name];
  };
}
