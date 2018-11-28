import React, {Component} from 'react'; 

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
             <div className="page-header table-responsive table-hover">
            <h2 className="d-lg-none">Student Grade Table</h2>
            {/* <p className="text-right d-lg-none table-default">Grade Average : <span className="avgGrade label label-default"> 0</span></p> */}
            <h3 className="d-none d-lg-block">Student Grade Table</h3>
            {/* <p className="float-right d-none d-lg-block">Grade Average : <span className="avgGrade label label-default">0</span></p> */}
            </div>
        </div>
        )
        
    }
}

export default Header;