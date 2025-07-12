 export interface Employee {
    id: number;
    name: string;
    age: number;
    skills: string[];
    present: boolean;
}
var empinfo: Employee = {
    id: 101,
    name: "saikat",
    age: 30,
    skills: ["JavaScript", "TypeScript", "React"],
    present: true
};
console.log(empinfo);
console.log(empinfo.skills);
console.log(empinfo.name);

var empinfo2: Employee = {
    id: 102,
    name: "soumik",
    age: 28,
    skills: ["Python", "Fortran", "Cpp"],
    present: false
};
console.log(empinfo2);
console.log(empinfo2.skills);
console.log(empinfo2.name);