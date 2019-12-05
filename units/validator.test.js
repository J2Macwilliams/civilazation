const validateUnit = require('./validator')

describe('unit validator', () => {
    describe('validateUnit()', () => {
        it('should fail if the name is missing', () => {
            //arrange (the setup)
            const unit = {
                type: "ranged",
                attack: 10
            }

            //act (we run the code we are testing)
            const actual = validateUnit(unit)

            //assert (we check that the result is what we expect)
            expect(actual.success).toBe(false)
        });

        test("should fail if the type is missing", () => {
            const unit = {
                "name": "slinger",
                "type": "ranges",
                "attack": 10
            }
            expect(validateUnit(unit).success).toBe(false);
        });

        test("should pass if the unit is valid", () => {
            const unit = getValidUnit();

            expect(validateUnit(unit).success).toBe(true);
        });
    });
});

function getValidUnit() {
    return {
        name: "slinger",
        type: "ranged",
        attack: 10
    };
}