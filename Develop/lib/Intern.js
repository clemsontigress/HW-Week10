// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
/*In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'*/

class Intern extends Employee {
    
    constructor(_name, _id, _email, _school){
        super(_name, _id, _email);
        this.school = _school

    };

    getSchool() {
      return this.school;
    };
    getRole() {
      return "Intern";
    };
}

module.exports = Intern;