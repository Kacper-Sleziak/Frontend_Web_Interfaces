const students = [
    {
        id: 1, 
        firstName: "Jan", 
        lastName: "Kowalski", 
        email: "jkowalski@gmail.com",
        subject:"PIW", 
        tags:"PIW", 
        description: "Poszukuje osoby do projektu "
    },
    
    {
        id: 2, firstName: "Grzegorz", 
        lastName: "Kowalski", 
        email: "gkowalski@gmail.com", 
        subject:"SO2",
        tags:"Szandała", 
        description: "Poszukuje osoby do projektu "
    },

    {
        id: 3, 
        firstName: "Michał", 
        lastName: "Kowalski", 
        email: "mkowalski@gmail.com",
        subject:"RiPO", 
        tags:"Serafin", 
        description: "Poszukuje osoby do projektu która ogarnia openCV, pythona venv itp itd "
    },

    {
        id: 4, 
        firstName: "Kacper", 
        lastName: "Kowalski", 
        email: "kkowalski@gmail.com",
        subject:"BD2",  
        tags:"C#", 
        description: "Poszukuje osoby do projektu "
    },

    {
        id: 5, 
        firstName: "Michał", 
        lastName: "Wiśniewski", 
        email: "wisnia@gmail.com", 
        subject:"SO2",
        tags:"Szandała", 
        description: "Poszukuje osoby do projektu z SO"
    },

    {
        id: 6, 
        firstName: "Jan", 
        lastName: "Kowalski", 
        email: "jkowalski@gmail.com",
        subject:"PIW", 
        tags:"PIW", 
        description: "Poszukuje osoby do projektu "
    },
    
    {
        id: 7, firstName: "Grzegorz", 
        lastName: "Kowalski", 
        email: "gkowalski@gmail.com", 
        subject:"SO2",
        tags:"Szandała", 
        description: "Poszukuje osoby do projektu "
    },

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