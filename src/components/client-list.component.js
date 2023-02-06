import React, {Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


const ClientData = props =>{
    return(
        <tr>           
            <td><span className="fw-bold text-primary">{props.clients.lname + ", " + props.clients.fname + " " + props.clients.mname} </span> <br/>
            <span className="fst-italic fw-light"> {props.clients.address} </span> <br />
            <span className="fst-italic fw-lighter">{props.clients.contact}</span> </td>
            <td>
                <Link to={'/loan/'+props.clients._id} className="btn btn-outline-info btn-sm mt-2">Loan Details</Link> &nbsp;
                <Link to={'/edit/'+props.clients._id} className="btn btn-outline-success btn-sm mt-2">Edit</Link> &nbsp;
                <a href="# " onClick={()=>{props.deleteClient(props.clients._id)}} className="btn btn-outline-danger btn-sm mt-2">Delete</a>
            </td>
        </tr>       
    )
}

export default class ClientList extends Component{

    constructor(props){
        super(props);

        this.deleteClient = this.deleteClient.bind(this);
         
        this.state = { clients : [] }
        
        
    }


    componentDidMount(){
        axios.get('http://localhost:5000/client/')
            .then(res => {
                this.setState({ clients : res.data });
            })
            .catch(err =>{
                console.log(err);
            });
    }


    deleteClient(id){
        axios.delete('http://localhost:5000/client/'+id)
            .then( res => console.log(res.data))
            this.setState({
                clients : this.state.clients.filter(el => el._id !== id)
            })
    }


    clientLists(){
        return this.state.clients.map( currentClients =>{
            return <ClientData clients={currentClients} deleteClient={this.deleteClient} key={currentClients._id} />
        })
    }

    render(){
        return(
            <div className="container bg-white p-3 mt-2 shadow-lg p-5 mb-5 bg-white rounded">                
                <h3>Clients Lists</h3>

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>Borrower's name</th>
                        {/* <th>Address</th>
                        <th>Contact</th> */}
                        <th>Actions</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.clientLists()}
                    </tbody>
                </table>

            </div>
        )
    }
}