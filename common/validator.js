module.exports = {
    isNumber,
    isNotNumber,
};

function isNumber(value) {
    return !isString(value) && !isNaN(parseFloat(value)) && isFinite(value);
}

function isNotNumber(value) {
    return !isNumber(value);
}

function isString(value) {
    return typeof value === "string";
}