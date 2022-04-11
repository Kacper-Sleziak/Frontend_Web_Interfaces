
// Get all students from json file
export function getStudents(){
    return(
        fetch('data.json',{method: "get"})
        .then(response => response.json())
        .then(json => json.students)
    )
}

// Add student to json file
export function addStudent(body){
    return (
        fetch('data.json', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
              'Content-type': 'application/json'
            }
        })
    )
}

