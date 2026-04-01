const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const WelcomeStudent = users.map(({firstName}) => `hello ${firstName}`);
console.log(WelcomeStudent);

const Residents = users.filter(({role})=>role === 'Full Stack Resident');
console.log(Residents);

const NamesOfred = users.filter(({role})=>role === 'Full Stack Resident')
.map(({lastName}) =>lastName);
console.log(NamesOfred)