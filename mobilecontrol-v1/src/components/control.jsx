import React, { Component } from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import Airserver from './airserver';
import Chromebox from './chromebox';
import HDMI1 from './hdmi1';
import HDMI2 from './hdmi2';
import processorComms from '../services/processorcoms';



class Control extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <p class="h1">Control Page</p>
                <div>
                    <button type="button" class=""  onClick={processorComms.chromeboxSelect} ></button>
                    <button type="button" class=""  onClick={processorComms.airserverSelect}></button>
                    <button type="button" class=""  onClick={processorComms.hdmi1Select}></button>
                    <button type="button" class=""  onClick={processorComms.hdmi2Select}></button>
                </div>  
                <switch>
                    <Route path="/chromeboxControl" component={Chromebox} />
                    <Route path="/airserverControl" component={Airserver} />
                    <Route path="/hdmi1Control" component={HDMI1} />
                    <Route path="/hdmi2Control" component={HDMI2} />
                </switch>
            </div>
          );
    }
}
 
export default Control;