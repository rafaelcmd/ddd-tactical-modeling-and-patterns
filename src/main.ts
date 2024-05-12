import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "John");

const addres = new Address("Rua", 123, "12345-678", "São Paulo");

customer._address = addres;
customer.activate();

const item1 = new OrderItem("1", "Item1", 10);
const item2 = new OrderItem("2", "Item2", 20);

const order = new Order("1",
                        "123", //Aggregate: ID (Customer Entity)
                        [item1, item2] //Aggregate: Object (Item Entity)
                    );