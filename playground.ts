interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
  phoneNumbers: string[];
  country: string;
}

type PersonLog = (name: string, age: number, city: string) => string;
interface PersonInterf {
  (name: string, age: number): string;
}

const logPerson: PersonInterf | PersonLog = (
  personName,
  personAge,
  personCity
): string => {
  const info = `I'm ${personName} with age ${personAge} from ${personCity}`;
  return info;
};

logPerson('Hamza', 25, 'Sialkot');

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  phoneNumbers: ['123-456-7890', '456-789-0123'],
  country: 'USA',
};

class Hero {
  name: string;
  age: number;
  isAdult: boolean;

  constructor(name: string, age: number, isAdult: boolean) {
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
  }
}

const newHero = new Hero('Hamza', 25, true);

export function play() {
  return `
    ${person.firstName} ${person.lastName}
    ${person.age}
    ${person.address.street}
    ${person.address.city}
    ${person.address.state}
    ${person.phoneNumbers}
    ${person.country}
    `;
}
