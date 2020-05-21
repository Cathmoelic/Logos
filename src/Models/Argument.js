import Statement from "./Statement";

class Argument extends Statement {
    constructor(premises, conclusion) {
        this.premises = premises;
        this.conclusion = conclusion;
    };

    get isTrue() {
        return this.premises.all(premise => premise.isTrue());
    };

    get isFalse() {
        return this.premises.all(premise => premise.isFalse());
    };
}