import React, { Component } from 'react';
import {Route, Redirect, Switch} from "react-router-dom"

class Control extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Control Page</h1>
                <div>
                    <button type="button" class=""  ></button>
                    <button type="button" class=""  ></button>
                    <button type="button" class=""  ></button>
                    <button type="button" class=""  ></button>
                </div>  
                <switch>
                    <Route path="/chromeboxControl" component={login} />
                    <Route path="/airserverControl" component={control} />
                    <Route path="/hdmi1Control" component={login} />
                    <Route path="/hdmi2Control" component={control} />
                </switch>
            </div>
          );
    }
}
 
export default Control;