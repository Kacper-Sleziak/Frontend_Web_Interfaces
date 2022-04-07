const groups = [
    {

    }
]


const StudentService = {

    getGroups: () => {
        return groups;
    },

    addGroup: (group) => {
        groups.push(group);
    }
}

export default StudentService;