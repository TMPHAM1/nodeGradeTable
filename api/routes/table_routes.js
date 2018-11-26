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
        var inputName = "Hanmi";
        var inputCourse = "Math";
        var inputGrade = "100";
        Student.create({name: inputName, course_name: inputCourse, grade: inputGrade}, function (err, students) {
            Student.find().then(function (students) {
                console.log("new list:", students);
            })
        })
    })

    // Delete Student -------------------------------------------->
    app.delete('/delete', (req,res) => { // deletes a student
        console.log("here")
        Student.deleteOne({"_id": "5bf6834ffb6fc0561ffeb78f"}, function (err, students) {
            Student.find().then(function (students) {
                console.log("new list:", students);
            })
        })
    })
    // Edit Student ---------------------------------------------->
    app.patch('/edit', (req, res) => { // call to make an edit student
        console.log("here");
       var id = "5bf856cd23f3e08c3a016cf2"
       var editName = "Bob";
       var edit_course = "English";
    var edit_grade = "50"
        
        Student.findOne({"_id": "5bf856cd23f3e08c3a016cf2"}, function (err, doc) {
            doc.name = editName;
            doc.course_name = edit_course;
            doc.grade = edit_grade;
            doc.save();
            console.log(doc);
        })
    })
});
}