import React from 'react';
import { render } from 'react-dom';
import { strengthIndicator, strengthColor } from './Strength';

  

class App extends React.Component {
    constructor(){
        super();
        this.state= {
            borderColor:'',
            iconFlag: false
        }
    }

     handleChange=()=>{
        const strength = strengthIndicator(event.target.value) ;
        const color = strengthColor(strength);
       this.setState({borderColor : color }); 
    //    console.log(strength);
    //    console.log(event.target.value.length);
    //    console.log(event.target.value);
    //    console.log(color);
       }

       iconClick =() =>{
        this.setState({
            ...this.state , 
            iconFlag:!this.state.iconFlag
        });
       }


    render(){
        return (
            <div className="container">
               <div className="container">
                   
               <form>
                      <div className="form-group row">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                <input 
                                    type={this.state.iconFlag == true ? "text" : "password"}
                                      className="form-control"
                                     id="inputPassword" 
                                     placeholder="Password"
                                     onChange={this.handleChange}
                                     style={
                                         {
                                             border:`1px solid ${this.state.borderColor}`,
                                            boxShadow: `none`,
                                            outLine: `none`,

                                         }
                                     }
                                     />
                                     <i className= {this.state.iconFlag == true ? "fa fa-eye-slash" : "fa fa-eye"}
                                     aria-hidden="true"
                                     style={
                                         {
                                             position:"relative",
                                             float:"right",
                                             top: "-28px",
                                            right:" 13px",
                                            cursor:"pointer"
                                         }
                                        }
                                     onClick={this.iconClick}
                                     ></i>
                                        <div 
                                        className={(this.state.borderColor.length >0 && this.state.borderColor != 'green') ? "text-danger" : "text-hide"}
                                         >
                                                <span>
                                                Password should contain atlest one number, one small alphabet, one capital alphatet
                                                and one special character.And Max. length is 16 
                                                </span>
                                         </div>
                                        

                                    </div>
                
                        </div>
                </form>


               </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));