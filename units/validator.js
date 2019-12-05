// this file holds the logic for validating units
const { isNotNumber } = require('../common/validator.js')


module.exports = {
    validateUnit
}

function validateUnit(unit) {
    const { name, type, attack, defense } = unit;

    let errors = [];

    if (!name) {
        errors.push('Please provide the name for the unit.')
    }

    if (!type) {
        errors.push('Please provide the type for the unit.')
    }

    // attack------------------------------------------------
    if (!attack) {
        errors.push('Please provide the attack for the unit.')
    }

    if (attack && isNotNumber(attack)) {
        errors.push("The attack must be a number.")
    }


    let success = errors.length === 0;
    let errorMessage = success
     ? "" 
     : "The information is not valid, see errors for details.";

    return {
        success,
        errorMessage,
        errors
    };
}