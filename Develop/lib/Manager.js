// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
/*In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'*/

class Manager extends Employee {
    
    constructor(_name, _id, _email, _officeNumber){
        super(_name, _id, _email);
        this.officeNumber = _officeNumber

    };

    getOfficeNum() {
      return this.officeNumber;
    };

    getRole() {
      return "Manager";
    };
}

module.exports = Manager;