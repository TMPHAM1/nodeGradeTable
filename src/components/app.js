import React, {Component} from 'react';
import StudentList from '../components/student-table-list';
import AddForm from '../components/student-add-form';




class App extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
        <div>
            <AddForm />
            <StudentList />
        </div>
        )
    }
}

export default App; 


