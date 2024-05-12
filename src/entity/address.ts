//Value Object
export default class Address {
    _street: string = "";
    _number: number = 0;
    _zip: string = "";
    _city: string = "";

    /*Attribute-based Equality: Value object is an object that is defined by its
    attributes rather than a unique identity*/
    
    /*Self-contained: Value objects should be self-contained and capable of
    validating its own state.*/

    /*Immutability: Value objects are immutable, so we can't change them.
    So we can't use setters.*/

    /*Descriptive of a Concept: They are often used to describe aspects of the
    domain that are quantifiable or describable through values, like money,
    a date range, a coordinate, or complex numbers like an address.*/

    /*No Side Effects: Operations on Value Objects can produce new Value Objects
    but should not affect the state of other objects or external systems.*/

    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;

        this.validate();
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }

        if (this._number === 0) {
            throw new Error("Number is required");
        }

        if (this._zip.length === 0) {
            throw new Error("Zip is required");
        }

        if (this._city.length === 0) {
            throw new Error("City is required");
        }
    }

    toString() {
        return `${this._street}, ${this._number}, ${this._zip} ${this._city}`;
    }
}