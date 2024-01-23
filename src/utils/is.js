const _toString = Object.prototype.toString;

export function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
}

export function isObject(obj) {
    return _toString.call(obj) === '[object Object]';
}