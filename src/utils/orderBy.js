import _ from "lodash-es";

export function orderByKeyWithDirection(array, key, direction) {
  return _.orderBy(array, key, direction);
}
