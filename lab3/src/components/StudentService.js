const students = [
    {
        id: 1, 
        firstName: "Jan", 
        lastName: "Kowalski", 
        email: "jkowalski@gmail.com", 
        tags:"PIW", 
        description: "Poszukuje osoby do projektu "
    },
    
    {
        id: 2, firstName: "Grzegorz", 
        lastName: "Kowalski", 
        email: "gkowalski@gmail.com", 
        tags:"SO2, Szandała", 
        description: "Poszukuje osoby do projektu "
    },

    {
        id: 3, 
        firstName: "Michał", 
        lastName: "Kowalski", 
        email: "mkowalski@gmail.com", 
        tags:"RiPO, Serafin", 
        description: "Poszukuje osoby do projektu "
    },

    {
        id: 4, 
        firstName: "Kacper", 
        lastName: "Kowalski", 
        email: "kkowalski@gmail.com", 
        tags:"BD2", 
        description: "Poszukuje osoby do projektu "
    },

    {
        id: 5, 
        firstName: "Michał", 
        lastName: "Wiśniewski", 
        email: "wisnia@gmail.com", 
        tags:"SO2, Szandała", 
        description: "Poszukuje osoby do projektu z SO"
    }
];

const StudentService = {

    getStudents: () => {
        return students;
    },

    addStudent: (student) => {
        students.push(student);
    }
}

export default StudentService;