const printname= {

    firstname: "Akhil",
    lastname: "Biswal",

    printfulllname: function () {
        console.log(this.firstname + " " + this.lastname);
    }
}

const anotherPerson = {
    firstname: "John",
    lastname: "Doe"
};


printname.printfulllname.call(anotherPerson)

printname.printfulllname.apply(anotherPerson)


const answer=printname.printfulllname.bind(anotherPerson)
answer()