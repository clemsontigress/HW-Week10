// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

/*In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'*/

class Engineer extends Employee {
    
    constructor(_name, _id, _email, _github){
        super(_name, _id, _email);
        this.github = _github

    }

    getGithub()
    getRole()
}