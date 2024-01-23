import { isArray, isObject } from './is';

/**
 * @description: 移除对象中指定的key
 * @param {object} source
 * @param {Array} keys
 * @return {*}
 */
export function omit(
  source,
  keys
) {
  const target = {};
  const sourceKeys = Object.keys(source);
  sourceKeys.forEach(key => {
    if (!keys.includes(key)) {
      target[key] = source[key];
    }
  })
  return target;
}

/**
 * @description: 获取对象中指定key的对象
 * @param {object} source
 * @param {Array} keys
 * @return {*}
 */
export function pick(
  source,
  keys
) {
  const target = {};
  keys.forEach((key) => {
    if (source[key] !== void 0) {
      target[key] = source[key];
    }
  });
  return target;
}

export function stringify(obj) {
  if (!isArray(obj) && !isObject(obj)) return;
  try {
    return JSON.stringify(obj);
  } catch {
    return isArray(obj) ? [] : {};
  }
}
