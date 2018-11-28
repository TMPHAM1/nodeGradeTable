import React, {Component} from 'react';
import StudentList from '../components/student-table-list';
import AddForm from '../components/student-add-form';
import Header from '../components/header';




class App extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
        <div>
            <Header />
            {/* <AddForm /> */}
            <StudentList />
        </div>
        )
    }
}

export default App; 


