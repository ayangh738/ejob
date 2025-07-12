var arrtest = [
    {
        id: 1,
        subject: "Math",
        description: "Algebra and Geometry",
        remarks: ["Good understanding", "Needs improvement in Geometry"]
    },
    {
        id: 2,
        subject: "Science",
        description: "Physics and Chemistry",
        remarks: ["Excellent in Physics", "Struggles with Chemistry"]
    },
    {
        id: 3,
        subject: "History",
        description: "World History and Geography",
        remarks: ["Shows interest in World History", "Needs to focus on Geography"]
    }
];
arrtest.forEach(function (v, index) {
    console.log(v.id + " " + v.subject + " " + v.description + " " + v.remarks);
});
