module.export = {
    isNumber,
    isNotNumber,

};

function isNumber(value) {
    return !isString(value) && !isNan(parseFloat(value)) && isFinite(value);
}

function isNotNumber(value) {
    return!isNumber(value);
}

function isString(value) {
    return typeof value === "string";
}