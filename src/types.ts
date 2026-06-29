type User = {
    firstName: string;
    lastName: string;
    age: number;
}

// Unions
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID: ${id}`);
}

printId(101);
printId("202");

// Intersection
type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "Albedo",
    startDate: new Date(),
    department: "Management"
};