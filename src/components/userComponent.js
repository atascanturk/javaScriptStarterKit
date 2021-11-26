import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User Component loaded.")
let logger1 = new ElasticLogger()

let userService = new UserService(logger1);

let user1 = new User(1,"Cantürk","Ataş","İzmir")
let user2 = new User(2,"Ayça","Ataş","İzmir")

// userService.add(user1);
// userService.add(user2);
//console.log(userService.getById(1));
//userService.list();

//console.log(userService.list())

let customer = {id:1, firstName: "Cantürk"}

customer.lastName = "Ataş";

//prototyping
console.log(customer.lastName);

console.log("-------------------------");

let customerToAdd = new Customer(6,"Cantürk","Test","İzmir","27","1231312")
customerToAdd.type ="customer"
userService.load();
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors);
console.log(userService.getCustomersSorted())
