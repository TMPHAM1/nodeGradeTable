import React, {Component} from 'react';
import axios from 'axios';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: "",
        }
    }
    
    componentDidMount() {
        console.log("here");
        this.pullStudents();
    }


 async pullStudents() { 
var students = await axios.get("http://localhost:5000/read")

this.setState({
    students: students.data
})
     
}
    render() {
        console.log(this.state);
        if (this.state.students) {
        var studentList = this.state.students.map((item,index)=>
     {
         return (
        <tr>
            <td>{item.name}</td>
            <td>{item.course_name}</td>
            <td>{item.grade}</td>
            <td>
            <button className="btn btn-danger" id={item._id}>Delete</button>
            <button  className="btn btn-warning" id={item._id}>Edit</button>
            </td>  
        </tr>
         )
         
     } )
    }
        return (
            <div className="col-md-8">
                  <table className="table table-responsive">
                <thead>
                     <tr>
                    <th>Name</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList}
                </tbody>
                
            </table>
            </div>
          
        )
    }
}
export default StudentList;