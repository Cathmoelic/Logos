class Axiom {
    constructor() {
        this.belief = null;
    }

    get isTrue() {
        return this.belief === true;
    }

    get isFalse() {
        return this.belief === false;
    }
}

export default Axiom;