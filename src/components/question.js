import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:[]
        }
    }
    componentDidMount() {
        console.log(this.props.location.state);
        fetch(this.props.location.state.URI)
         .then(result => result.json())
         .then(data => {
             this.setState({result:data.results});
             console.log("State", this.state.result);
         });
    }

    render() {
        const Questions = this.state.result.map((Question, i) => {
            return <li className="list-group-item"> {Question.question}</li>
        })

        return (
          <ul className="list-group"> {Questions} </ul>
        );
    }
}

export default Question;