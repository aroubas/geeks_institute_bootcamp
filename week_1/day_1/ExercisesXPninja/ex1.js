const person = {
  FullName : "ahmed yassin" ,
  Mass : 80,
  Height : 1.80,
  BodyMass(person) {
    return person.Mass / (person.Height * person.Height) ;
  }
};

const SecondePerson = {
  FullName : "Anas jeaidi" ,
  Mass : 85,
  Height : 1.80,
  BodyMass(SecondePerson) {
    return SecondePerson.Mass / (SecondePerson.Height*SecondePerson.Height) ;
  }
};

function Compare(P1,P2){
  const BmiP1= P1.BodyMass(P1);
  const BmiP2= P2.BodyMass(P2);

  if(BmiP1 > BmiP2){
    return `${P1.FullName} has higher BMI`;
  } else if (BmiP2 > BmiP1) {
    return `${P2.FullName} has higher BMI`;
  } else {
    return "They have the same BMI!";
  }
}