import React, {Component} from 'react';
import { useParams, Link} from 'react-router-dom';
import axios from 'axios';


//equivalent of props.match.params.id in Version5
function withParams(Component) {
return (props) => <Component {...props} params={useParams()} />;
}



export class ClientEdit extends Component{

    constructor(props){
        super(props);

        this.state = {
            fname : "",
            mname : "",
            lname : "",
            address : "",
            contact : ""
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // onFnameChange(e){
    //     this.setState({
    //         fname : e.target.value
    //     })
    // }

    componentDidMount(){
        axios.get('http://localhost:5000/client/lists/'+this.props.params.id)
            .then(res => {
                this.setState({
                    fname: res.data.fname,
                    mname: res.data.mname,
                    lname: res.data.lname,
                    address: res.data.address,
                    contact: res.data.contact,
                })
            })
            .catch(err =>{
                console.log(err);
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

        axios.post('http://localhost:5000/client/edit/'+this.props.params.id, clientData)
            .then( res => window.location="/loan/"+this.props.params.id)
            .catch( err => console.log(err))
    }

    render(){
        return(
            <div className='container-fluid bg-warning bg-gradient p-5 vw-100'>
                <div className="container w-50 shadow-lg p-5 mb-5 bg-white rounded">
                    <h1>Edit client</h1>
                
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label>First name</label>
                                <input type="text" className='form-control' data-name="fname" onChange={this.onInputChange} required value={this.state.fname}/>
                            </div>
                            <br/>
                            <div className='form-group'>
                                <label>Middle name</label>
                                <input type="text" className='form-control' data-name="mname" onChange={this.onInputChange} required value={this.state.mname}/>
                            </div>
                            <br/>
                            <div className='form-group'>
                                <label>Last name</label>
                                <input type="text" className='form-control' data-name="lname" onChange={this.onInputChange} required value={this.state.lname}/>
                            </div>
                            <br/>
                            <div className='form-group'>
                                <label>Address</label>
                                <input type="text" className='form-control' data-name="address" onChange={this.onInputChange} required value={this.state.address}/>
                            </div>
                            <br/>
                            <div className='form-group'>
                                <label>Contact</label>
                                <input type="text" className='form-control' data-name="contact" onChange={this.onInputChange} value={this.state.contact}/>
                            </div>
                            <br/>
                            <Link to={'/lists'} className="btn btn-outline-secondary btn-sm">Back</Link>
                            <button type='submit'>Submit</button>
                        </form>    
                
                </div>
            </div>
        )
    }
}

//equivalent of props.match.params.id in Version5
export default withParams(ClientEdit);