/* Write a code block to create a class called Person having properties, fullName,
email, contactNum and a method called display which displays the values of all
the properties in it. Create another class named Trainee which inherits the class
Person having properties like highestQualification, college, university,
passoutYear and display method which displays all the properties. Demonstrate
method overriding and constructor overriding.(Create constructors in both the
classes.) */

class Person{
    constructor(fullName, email, contactNum){
        this._fullName = fullName;
        this._email = email;
        this._contactNum = contactNum;
    }
    display(){
        console.log("name " +this._fullName + "\n email :" + this._email + " \n contactNum " + this._contactNum);
    }
}
class Trainee extends Person{
    constructor(fullName, email, contactNum, highestQualification, collage, university, passoutYear){
        super(fullName, email, contactNum);
        this._highestQualification = highestQualification;
        this._collage = collage;
        this._university = university;
        this._passoutYear = passoutYear;
    }
    display(){
        console.log(`name ${this._fullName} \n email ${this._email} \n contactNum : ${this._contactNum} \n highestQualification:  ${this._highestQualification} \n collage : ${this._collage} \n university ${this._university} \n passoutYear : ${this._passoutYear}`);
    }
}

const trainee = new Trainee("krushit", "krushit.dudhat", "8e340", "BE", "VGEC", "GTU", "2022");
trainee.display();