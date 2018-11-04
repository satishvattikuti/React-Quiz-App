import React, { Component } from 'react';
import '../App.css';

class QuestionType extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Number of Questions </strong></label>
                        <div className="col-sm-7">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="10" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Type of Questions </strong></label>
                        <div className="col-sm-7">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Category </strong></label>
                        <div className="col-sm-7">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Difficulty </strong></label>
                        <div className="col-sm-7">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                </form>
             </div>
              
        )
    }
}


export default QuestionType;