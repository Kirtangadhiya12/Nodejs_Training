/*
Write a code block to create a class called Person having protected properties,
fullName, email, contactNum and a method called display which displays the
values of all the properties in it. Create another class called Employee having
static property: organizationName and non-static properties: employeeID,
department, designation, technologiesKnown, dateOfJoining, experience.
Declare all the non-static properties to be private.
- Create a static method called sortEmployess which sorts the employees
based on their dateOfJoining.
- Create a non-static method which displays the employee details, like:
employeeID, fullName, email, contactNum, organizationName,
department, designation, technologiesKnown, dateOfJoining, experience.
- Provide constructors in both the Base and Derived classes.
- Set the static property: organizationName to a common value.
- Instantiate the Employee class by creating 5 objects.
- Sort the employee objects based on their dateOfJoining by invoking the
static method sortEmployees.
- Invoke the display method on sorted employee objects. (you can use
forEach/ for...of to display details of particular employee)
*/ 

class Person{
    _fullName;
    _email;
    _contactNum;
    constructor(fullName,email,contactNum){
        this._fullName = fullName;
        this._email = email;
        this._contactNum = contactNum;
    }
    display(){
        console.log("name: " +this._fullName + " \nemail: "+this._email+"\nconstact no: "+this._contactNum);
    }
}

class Employee extends Person{
    static organizationaName ;
    #employeeID ;
    #department;
    #designation;
    #technologiesKonwn;
    #dateOfJoining;
    #experience;
    constructor(fullName,email,contactNum, employeeID, department, designation, technologiesKnown, dateOfJoining, experience){
        super(fullName,email,contactNum);
        // this.organizationaName = organizationaName;
        this.#employeeID = employeeID;
        this.#department = department;
        this.#designation = designation;
        this.#technologiesKonwn = technologiesKnown;
        this.#dateOfJoining = dateOfJoining;
        this.#experience = experience;
    }

    static sortEmployee(...emps){
        emps.sort((a,b) => {
            let dateA = a.dateOfJoining.split(/[-,\s]/).reverse().toString();
            let dateB = b.dateOfJoining.split(/[-,\s]/).reverse().toString();
            // date string set for comparig yyyy-mm-dd formate ... console.log(dateA + "\t" + dateB);
            if(dateA < dateB){return -1;}
            if(dateA > dateB){return 1;}
            return 0;
        }).forEach(emp => {emp.display(); console.log("\n");});
    }

    get dateOfJoining(){
        return this.#dateOfJoining;
    }

    display(){
        super.display();
        console.log("organizationaName: "+ Employee.organizationaName + "\nemployeeID: " + this.#employeeID + "\ndepartment: " + this.#department +
        "\ndesignation: " + this.#designation +
        "\ntechnologiesKnown: " +this.#technologiesKonwn +
        "\ndateOfJoining: " + this.#dateOfJoining +
        "\nexperience: " + this.#experience);
    }
}

//Set the static property: organizationName to a common value.
Employee.organizationaName = "organization";

//Instantiate the Employee class by creating 5 objects.
let emp1 = new Employee("navin","navin@gmail","13455", 12,"designing", "superviser", ["java","node"],"03-01-2022","0" );
let emp2 = new Employee("devid","devid@gmail","13455", 2, "backend", "junier", ["java","python"], "01-12-2021", "0");
let emp3 = new Employee("kevin","kevin@gmail","13455", 5, "QA", "junier", ["c", "c++"], "08-01-2022", "0");
let emp4 = new Employee("Alex","alex@gmail","13455", 1, "Testing", "senior", ["python","java"], "05-02-2018", "4");
let emp5 = new Employee("Dev","dev@gmail","13455", 4, "dev", "senior", ["java", "ruby", "node"], "21-09-2017","5");


Employee.sortEmployee(emp1,emp2, emp3, emp4, emp5);
