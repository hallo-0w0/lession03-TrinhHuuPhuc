import React, { Component } from 'react';

export default class THP_ClassComp extends Component {
    constructor(props){
        super(props);
        // Tạo đối tượng dữ liệu
        this.state = {
            firstName: "Trinh",
            lastName: "Phuc",
            userName: "k22cnt3"
        };
    }

    //arrow function
    Member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>Xin Chao {props.fullName} - Ban da {this.props.age} tuoi</h3>

            </div>
        )
    }
    ListMember = ()=>{
        return(
        <>
           <this.Member fullName="CGOD 1" age ="20"/>
           <this.Member fullName="CGOD 2" age ="30"/>
           <this.Member fullName="CGOD 3" age ="40"/>
           <this.Member fullName="CGOD 4" age ="50"/>
        </>
        )
        }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Class comp demo</h2>
                <hr/>
                <h3>Dữ liệu trong state</h3>
                <h4>Xin chào: {this.state.firstName} {this.state.lastName}</h4>
                <hr/>
                <h3>Dữ liệu từ props</h3>
                <p>company: {this.props.company}</p>
                <p>course: {this.props.course}</p>

                <hr/>
                <this.Member fullName="Trinh Huu Phuc" age="45"/>
                <hr/>
                <this.ListMember/>
            </div>
        );
    }
}
