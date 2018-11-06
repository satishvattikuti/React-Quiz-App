import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom'
let url = 'https://opentdb.com/api.php?';

class QuestionType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Amount: 10,
            Type: '',
            Difficulty:'',
            URL:'',
            redirect:false
        }
        this.handleAmount = this.handleAmount.bind(this);
       // this.handleCategory = this.handleCategory.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleDifficulty = this.handleDifficulty.bind(this);
        this.handleQuestionsChange = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleAmount(e) {
        this.setState({Amount:e.target.value})
    }
    handleType(e) {
        this.setState({Type:e.target.value});
    }
    // handleCategory(e) {
    //     this.setState({Category:e.target.value});
    // }
    handleDifficulty(e) {
        this.setState({Difficulty:e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault()
        url = url + 'amount=' + this.state .Amount;
        this.setState(
            {
                redirect:true,
                URL:url
            }
        );
    }

    render() {
        console.log(this.state);
        if (this.state.redirect) {
            return <Redirect to={{
                pathname:'/questions',
                state:{URI: this.state.URL}
            }} />
        } 
        return (
            <div className="container">
                <div className="container App"></div>
                    <div className="jumbotron">
                    <h1>Welcome to My Quiz App </h1>
                    <br/>
                    <h5 style={{color:'green'}}> Please select the number of questions, type of questions, category and the difficulty level to get started. </h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Number of Questions </strong></label>
                        <div className="col-sm-7">
                            <input type="number" className="form-control" value={this.state.Amount} onChange={this.handleAmount}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Type of Questions </strong></label>
                        <div className="col-sm-7">
                            <select  value ={this.state.Type} onChange={this.handleType} className="form-control">
                                <option> Any Type  </option>
                                <option> Multiple Choice </option>
                                <option>True / False </option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong> Choose a Category </strong></label>
                        <div className="col-sm-7">
                            <select value ={this.state.Category} onChange={this.handleCategory} className="form-control">
                                <option>Any Category</option>
                                <option> Sports  </option>
                                <option> General Knowledge </option>
                                <option> Mythology </option>
                                <option> History </option>
                                <option> Politics </option>
                            </select>
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label  className="col-sm-5 col-form-label"> <strong>Choose Difficulty </strong></label>
                        <div className="col-sm-7">
                            <select  value ={this.state.Difficulty} onChange={this.handleDifficulty} className="form-control">
                                <option>Any Difficulty</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                       <div className="col-lg-12">
                        </div>
                    </div>
                    <input className="btn btn-success" type="submit"  value="Submit" />
                </form>
             </div>   
        )
    }
}


export default QuestionType;