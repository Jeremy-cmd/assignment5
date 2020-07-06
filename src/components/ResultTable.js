<<<<<<< HEAD
import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';
import { Button, NavLink, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';


class ResultTable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let table = [];
        if(this.props.empty === "true" || this.props.error) {
              table.push(<tr>No Results</tr>);
              return table;
        }
        else {
            console.log("the data " + this.props.data);
            try {
             let x = JSON.parse(this.props.data);

                for(let i=0; i<x.length; i++){
<<<<<<< HEAD

=======
>>>>>>> d8b2c2341ef37de37e7ff1d8b9b6d6fec434ed41
                    table.push(
                        <th>{x[i].City},{x[i].State}</th>,
                        <tr>
                        <p> State: {x[i].State} </p>
                        <p> Location: {x[i].Lat}, {x[i].Long} </p>
                        <p> Population: {x[i].EstimatedPopulation} </p>
                        <p> Wages: {x[i].TotalWages} </p>



                    </tr>);
                }
                return table;
        }catch (e) {
                console.log("the error " + e.error);

            }

            return table;


        }
    }


}

export default ResultTable;
=======
import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';
import { Button, NavLink, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';


class ResultTable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let table = [];
        if(this.props.empty === "true" || this.props.error) {
              table.push(<tr>No Results</tr>);
              return table;
        }
        else {
            console.log("the data " + this.props.data);
            try {
             let x = JSON.parse(this.props.data);

                for(let i=0; i<x.length; i++){

                    table.push(
                        <th>{x[i].City},{x[i].State}</th>,
                        <tr>
                        <p> State: {x[i].State} </p>
                        <p> Location: {x[i].Lat}, {x[i].Long} </p>
                        <p> Population: {x[i].EstimatedPopulation} </p>
                        <p> Wages: {x[i].TotalWages} </p>



                    </tr>);
                }
                return table;
        }catch (e) {
                console.log("the error " + e.error);

            }

            return table;


        }
    }


}

export default ResultTable;
>>>>>>> 61b62baae841a1fbbc11973e54596e105967ff2f
