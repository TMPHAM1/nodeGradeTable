import React, {Component} from 'react';
import axios from 'axios';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: "",
            show: false,
            form: {
                name: '',
                course_name:'', 
                grade: '',
            },
            editForm: {
                editName: '',
                editCourse_name:'', 
                editGrade: '',
            },
            editID: ''
        }
    }

handleClose() {
    this.setState({
        show: false, 
    })
}

showModal (event) {
   var id = event.target.id
    this.setState({
        show: true,
        editID: id
    })
}
    
componentDidMount() {
        this.pullStudents();
    }
handleChange = (event) => { // Handles form input
        const {name, value} = event.target
        const {form} = this.state; 
        this.setState({
            form: {
                ...form,
                [name]: value
            }
        })
        
    }
handleEditChange = (event) => { // Handles form input
        const {name, value} = event.target
        const {editForm} = this.state; 
        this.setState({
            editForm: {
                ...editForm,
                [name]: value
            }
        })
        
    }

async handleEditFormSubmit() { //handles Adding Student
        const {editName, editCourse_name, editGrade } = this.state.editForm;
        var {editID} = this.state;
     var editStudent = await axios.patch('http://tienmpham.com:5000/edit', {
                _id: editID,
                name: editName,
                course_name: editCourse_name,
                grade: editGrade,
            },
        ).then(this.setState({
            editForm: {
                editName: '',
                editCourse_name:'', 
                editGrade: '',
            },
            show: false

        }));
        
        this.pullStudents();
            
        console.log("editStudentData", editStudent.data);
        

     
    

    
console.log("new State", this.state.students);
    
    
      
        
    }
async handleFormSubmit() { //handles Adding Student
       const {name, course_name, grade} = this.state.form;
    var addedStudent = await axios.post('http://tienmpham.com:5000/add', {
               name: name,
               course_name: course_name,
               grade: grade,
           },
       )
  this.setState({
      students: addedStudent.data,
  })
       
   }


 async pullStudents() {  // Handles Grabbing student Data 
var students = await axios.get("http://tienmpham.com:5000/read")

this.setState({
    students: students.data
})
     
}

async deleteStudent(event) {
    var target = event.target; 
    var parentElement = target.parentElement;
    var row = parentElement.parentElement;
    var id = target.id;


    var deleted = await axios.delete("http://tienmpham.com:5000/delete/" + id).then(row.remove());
    
}
    render() {
        const {name, course_name, grade} = this.state.form;
        const {editName, editCourse_name, editGrade} = this.state.editForm
        if (this.state.students) {
        var studentList = this.state.students.map((item,index)=>
     {
         return (
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.course_name}</td>
            <td>{item.grade}</td>
            <td>
            <button className="btn btn-danger" id={item._id} onClick={this.deleteStudent}>Delete</button>
            <button  className="btn btn-warning edit-btn" id={item._id} onClick={(event) => this.showModal(event)}>Edit</button>
            </td>
        </tr>
         )
         
     } )
    }
        return (
            <div>
                 <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Edit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="input-group  validateName form-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user "></span>
                </span>
                <input type="text" className="form-control" name="editName" value={editName} id="studentName" placeholder="Student Name" onChange={this.handleEditChange}></input>
            </div>
          <div className="input-group  validateCourse form-group" >
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-modal-window"></span>
                </span>
                <input className="form-control" type="text"  name="editCourse_name" value={editCourse_name} id="courseName" onChange={this.handleEditChange} placeholder="Course Name"></input>
            </div>
            <div className="input-group validateGrade form-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-modal-window"></span>
                </span>
                <input className="form-control" name="editGrade" value={editGrade} id="grade" type="text"  onChange={this.handleEditChange} placeholder="Grade"></input>
            </div>
            <div>
          
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button className="btn-primary submit btn btn-success" type="submit" onClick={(event) => {this.handleEditFormSubmit(event)}} > Submit</Button> <Button onClick={this.handleClose.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
            <div className="student-add-form block float-right col-sm-12 col-md-4 input-group">
            <div className="input-group  validateName form-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user "></span>
                </span>
                <input type="text" className="form-control" name="name" value={name} id="studentName" placeholder="Student Name" onChange={this.handleChange}></input>
            </div>
            <div className="input-group  validateCourse form-group" >
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-modal-window"></span>
                </span>
                <input className="form-control" type="text"  name="course_name" value={course_name} id="courseName" onChange={this.handleChange} placeholder="Course Name"></input>
            </div>
            <div className="input-group validateGrade form-group">
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-modal-window"></span>
                </span>
                <input className="form-control" name="grade" value={grade} id="grade" type="text"  onChange={this.handleChange} placeholder="Grade"></input>
            </div>
            <div>
            <button className="btn-primary submit btn btn-success" type="submit" onClick={(event) => {this.handleFormSubmit(event)}} > Submit</button>
          <button className = "btn btn-default cancel" type="button">Cancel</button>
            </div>
            <ul className="list-group directions">
    <li className="list-group-item ">
        <p>For <b>Student Name</b>, may use any letter from the alphabet must be at least 2 letters</p>
    </li>
    <li className="list-group-item">
        <p>For <b>Student Course</b>, may use any alphanumerical character</p>
    </li>
    <li className="list-group-item">
        <p>For <b>Grade</b>, Must be any number greater then 0 and whole numbers only</p>
    </li>
</ul>
        </div>
            <div className="student-list-container col-md-8">
            <table className="student-list table Table-Normal">
                <thead className="thead-dark">
                    <tr>
                    <th className="title-th">Name</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {studentList}
                </tbody>
                
            </table>
            </div>
            </div>
        )
    }
}
export default StudentList;