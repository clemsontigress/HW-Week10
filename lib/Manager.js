const Employee = require("./Employee");

class Manager extends Employee {
    
    constructor(_name, _id, _email, _officeNumber){
        super(_name, _id, _email);
        this.officeNumber = _officeNumber

    };

    getOfficeNumber() {
      return this.officeNumber;
    };

    getRole() {
      return "Manager";
    };
}

module.exports = Manager;