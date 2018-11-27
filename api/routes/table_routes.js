module.exports = function(app,db) {
    var mongoose = require('mongoose'); // Imports Mongoose for use with mongoose connection
    var Schema = mongoose.Schema; // Creates a Schema
    var StudentSchema = new Schema ({ //Creates a student schema for mongoose to use to create students
        name: {
            type: String,
        },
        course_name: {
            type: String
        },
        grade: {
            type: Number,
        }
    })
    var Student = mongoose.model('Student', StudentSchema);
    // const students = db.collection("students");
    

    // Grab Student List ---------------------------------------->
    app.get('/read', (req,res) => { // grabs all students present
 

        Student.find().then(function (resp) { //looks for all student then uses a call back function 
            res.send(resp);
        
        });

    // Add Student  ---------------------------------------------->
    app.post('/add', (req,res) => { //adds  a student
        var {name, course_name, grade}= req.body;
        var inputName = name;
        var inputCourse = course_name;
        var inputGrade = grade;

        Student.create({name: inputName, course_name: inputCourse, grade: inputGrade}, function (err, students) {
            Student.find().then(function (students) {
                res.send(students);
            })
        })
    })

    // Delete Student -------------------------------------------->
    app.delete('/delete/:id', (req,res) => { // deletes a student
       var id = req.params.id
        console.log(id)
        Student.deleteOne({"_id": id}, function (err, students) {
            Student.find().then(function (students) {
                console.log("deleted", id);
            })
        })
    })
    // Edit Student ---------------------------------------------->
    app.patch('/edit', (req, res) => { // call to make an edit student
        console.log("here");
        console.log(req.body);
       var id = req.body._id
       var editName = req.body.name
       var edit_course = req.body.course_name
    var edit_grade = req.body.grade
        
        Student.findOne({"_id": id}, function (err, doc) {
            doc.name = editName;
            doc.course_name = edit_course;
            doc.grade = edit_grade;
            doc.save();
        })
        Student.find().then(function (students) {
            console.log(students);
            res.send(students);
        })
    })
});
}