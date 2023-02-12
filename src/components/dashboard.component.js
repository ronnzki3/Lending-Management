import React, {Component} from "react";
// import axios from 'axios';



export default class Dashboard extends Component{

       

    render(){
        return(         
            <div className="container bg-secondary p-3 mt-2 shadow-lg p-5 mb-5 rounded"> 
                <h3 className="text-center text-info fw-bolder">COMMODITY Lending Investors, Inc. </h3>
                <h5 className="text-center text-primary">Management System</h5>               
                <h3 className="mt-5 mb-5 fw-bold ">Dashboard</h3>

                <div className="container d-flex justify-content-center">
                
                
                    <div className="card" style={{width: "18rem"}}>                
                        <div className="card-body">
                            <h5 className="card-title">Total Clients</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Active :</li>
                            <li className="list-group-item">Inactive :</li>
                        </ul>
                        <div className="card-body">
                            {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                        </div>
                    </div>


                    <div className="card mx-5" style={{width: "18rem"}}>                
                        <div className="card-body">
                            <h5 className="card-title">Collectibles</h5>                            
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Today :</li>
                            <li className="list-group-item">Weekly :</li>
                            <li className="list-group-item">Monthly :</li>
                        </ul>
                        <div className="card-body">
                            {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                        </div>
                    </div>



                    <div className="card" style={{width: "18rem"}}>                
                        <div className="card-body">
                            <h5 className="card-title">Overdues</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Total Clients : </li>
                            <li className="list-group-item">Total Amount : </li>
                        </ul>
                        <div className="card-body">
                            {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}