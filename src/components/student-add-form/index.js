import React, {Component} from 'react';


class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            course_name:'', 
            grade: 0,
        }
    }

        render() {
            
            return (
        <div className="student-add-form block float-right col-sm-12 col-md-4 input-group">
                    <div className="input-group  validateName form-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-user "></span>
                        </span>
                        <input type="text" className="form-control" name="studentName" id="studentName" placeholder="Student Name"></input>
                    </div>
                    <div className="input-group  validateCourse form-group" >
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-modal-window"></span>
                        </span>
                        <input className="form-control" type="text"  name="courseName" id="courseName" placeholder="Course Name"></input>
                    </div>
                    <div className="input-group validateGrade form-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-modal-window"></span>
                        </span>
                        <input className="form-control" name="grade" id="grade" type="text" placeholder="Grade"></input>
                    </div>
                    <div>
                    <button className="btn-primary submit btn btn-success" type="submit"> Submit</button>
                  <button className = "btn btn-default cancel" type="button">Cancel</button>
                    </div>
                    <ul class="list-group directions">
            <li class="list-group-item ">
                <p>For <b>Student Name</b>, may use any letter from the alphabet must be at least 2 letters</p>
            </li>
            <li class="list-group-item">
                <p>For <b>Student Course</b>, may use any alphanumerical character</p>
            </li>
            <li class="list-group-item">
                <p>For <b>Grade</b>, Must be any number greater then 0 and whole numbers only</p>
            </li>
        </ul>
                </div>
                
                 
            )
        }
    }

export default AddForm;

