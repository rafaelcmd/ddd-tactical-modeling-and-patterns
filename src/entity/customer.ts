//Business-Focused Entity
class Customer {

    /*Entity:
    Represents a domain object with a distinct identity.
    Entities have lifecycles and are identifiable through
    their unique identifiers.*/

    _id: string;
    _name: string;
    _address: string;
    _active: boolean = true;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;

        //Auto-validation
        this.validate();
    }

    /*Identity: An entity is distinguished by its identity,
    which typically remains constant throughout its lifecycle.
    The identity allows the entity to be uniquely identified
    within the domain model, regardless of its current state.*/

    get id(): string {
        return this._id;
    }

    /*********************************************************
    In an Anemic Domain Model, domain entities primarily
    consist of data structures (often referred to as "dumb"
    objects) with little or no behavior associated with them.
    These entities typically contain only data fields and 
    accessor methods (getters and setters) for accessing and
    modifying that data, but they lack meaningful business
    logic or behavior.

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    get active(): boolean {
        return this._active;
    }

    set name(name: string) {
        this._name = name;
    }

    set address(address: string) {
        this._address = address;
    }

    set active(active: boolean) {
        this._active = active;
    }
    *********************************************************/

    /*Rich Domain Model:
    Business logic is the actual implementation of the
    domain model. It defines the behavior of the domain
    entities, such as how they interact with each other.*/

    getFullName(): string {
        return this._name;
    }

    getAddress(): string {
        return this._address;
    }

    changeName(name: string): void {
        this._name = name;

        //Auto-validation
        this.validate();
    }

    changeAddress(address: string): void {
        this._address = address;
    }

    activate(): void {
        if (this._address.length === 0)
            throw new Error('Address is required');

        this._active = true;
    }

    deactivate(): void {
        this._active = false;
    }

    /*State: An entity encapsulates the data representing
    the current state of the object. This state can evolve
    over time as the entity undergoes various state
    transitions or interacts with the system.*/

    /*Consistency: Entities are responsible for maintaining
    consistency and integrity within the domain model. They
    enforce business rules and constraints to ensure that the
    entity's state remains valid and consistent with the
    domain's requirements.*/

    validate() {
        if (this._name.length === 0)
            throw new Error('Name is required');

        if (this._id.length === 0)
            throw new Error('Id is required');

        return true;
    }
}