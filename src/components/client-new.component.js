import React, {Component, useState} from 'react';
// import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';


const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker className="form-control pickdate" name="releasedate" selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };



export default class ClientNew extends Component{   

    constructor(props){
        super(props);

        this.state = {
            fname : "",
            mname : "",
            lname : "",
            address : "",
            contact : "",
            loantype: "",
            loanamount:0,
            loanterm:"",
            client_id:"",
            releasedate:"",
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onBack = this.onBack.bind(this);

        
    }

    onDateChanges(){
        this.setState({
            releasedate : document.querySelector(".pickdate").value
        })
    }

    onInputChange(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        // console.log(this.state);

        const clientData ={
            fname : this.state.fname,
            mname : this.state.mname,
            lname : this.state.lname,
            address : this.state.address,
            contact : this.state.contact
        }

        axios.post('http://localhost:5000/client/new-client',clientData)
            // .then( res => window.location="/")
            // .then(res=> console.log('saved'+ res.data))
            .then(res =>
                   this.onSaved(res.data)
                )
            .catch( err => console.log(err))
    }


    onSaved(id){                

        const loanData ={
            client_id : id,
            loantype : this.state.loantype,
            loanamount : this.state.loanamount,
            loanterm : this.state.loanterm,
            releasedate: document.querySelector(".pickdate").value,
        }

        axios.post('http://localhost:5000/loan/new-loan',loanData)       
        .then(res =>
                window.location="/loan/"+id
            )
        .catch( err => console.log(err))
    }


    onNext(){
        document.getElementById("client-container").style.display="none";
        document.querySelector("#loan-container").classList.remove("d-none");
    }


    onBack(){
        document.getElementById("client-container").style.display="block";
        document.querySelector("#loan-container").classList.add("d-none");
    }

   

    render(){       
        
        return(
            <div className='container-fluid bg-success bg-gradient p-5 vw-100'>
                <div className="container w-50 shadow-lg p-5 mb-5 bg-white rounded">              

                <form onSubmit={this.onSubmit}>               
                <div id="client-container">         
                        <h1>New Client</h1>     

                        
                        <div className='form-group'>
                            <label>First name</label>
                            <input type="text" className='form-control' data-name="fname" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Middle name</label>
                            <input type="text" className='form-control' data-name="mname" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Last name</label>
                            <input type="text" className='form-control' data-name="lname" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Address</label>
                            <input type="text" className='form-control' data-name="address" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Contact</label>
                            <input type="text" className='form-control' data-name="contact" onChange={this.onInputChange} />
                        </div>

                        <br/>
                        <br/>                      

                        <button type='button' onClick={()=>this.onNext()}>Next</button>                   
                </div> 

                <div id="loan-container" className='d-none'>
                        <h2>Loan Details</h2>
                        
                        <div className='form-group'>
                            <label>Date Release</label>
                            <Example  />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Loan Type</label>
                            <input type="text" className='form-control' data-name="loantype" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Loan Amount</label>
                            <input type="text" className='form-control' data-name="loanamount" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Loan Term (per day)</label>
                            <input type="text" className='form-control' data-name="loanterm" onChange={this.onInputChange} required />
                        </div>
                        <br/>
                        <br/>
                        <button type='button' onClick={()=>this.onBack()}>Back</button> 

                        <button type='submit'>Submit</button>
                </div>
                </form>

                </div>
            </div>
        )
    }
}