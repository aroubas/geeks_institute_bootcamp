function displayStudentInfo(objUser){
    const{first,last} = objUser;
    return  `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// output = Your full name is Elie Schoppik
