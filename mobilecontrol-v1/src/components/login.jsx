import React, { Component } from 'react';
import Joi from "joi-browser";

class login extends Component {
    state = { 
        roomCode
     }

     handleSubmit = 
     
    render() { 
        return ( 
            <div>
                <h1>Shopify Room Control</h1>
                <p>Please enter the code displayed on the room touch panel</p>
                <form>
                    <input type="code" class="form-control" id="roomCode" placeholder="Room Code" ></input>
                    <button type="button" class="btn btn-primary" onClick={() =>this.handleSubmit} >Login</button>
                </form>
            </div>    
         );
    }
}
 
export default login;