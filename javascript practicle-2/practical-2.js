/* 
Write a code block to create a class called Employee having static property:
organizationName and non-static properties: employeeID, department,
designation, technologiesKnown, dateOfJoining, experience. Declare all the
non-static properties to be private. Provide getter and setter methods for reading
and writing the values of properties: department, designation,
technologiesKnown. 
*/

class Employee {
    static organizationaName ;
    #employeeID ;
    #department;
    #designation;
    #technologiesKonwn;
    #dateOfJoining;
    #experience;

    constructor(organizationaName, employeeID, department, designation, technologiesKnown, dateOfJoining, experience){
        this.organizationaName = organizationaName;
        this.#employeeID = employeeID;
        this.#department = department;
        this.#designation = designation;
        this.#technologiesKonwn = technologiesKnown;
        this.#dateOfJoining = dateOfJoining;
        this.#experience = experience;
    }
    
    get department(){
        return this.#department;
    }
    get designation(){
        return this.#designation;
    }
    get technologiesKonwn(){
        return this.#technologiesKonwn;
    }
    set department(arg){
        this.#department = arg;
    }
    set designation(arg){
        this.#designation = arg;
    }
    set technologiesKonwn(arg){
        this.#technologiesKonwn = arg;
    }
}