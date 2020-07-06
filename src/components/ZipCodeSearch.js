import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';
import { Button, Table, NavLink, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import ResultTable from "./ResultTable.js"

class ZipCodeSearch extends Component{

    constructor(props) {
        super(props);
        this.state = {
            //where data is stored from api call
            zipdata: [],
            //zipcode user enters
            zipcode: "",
            //tells if results were received or not
            results: false,
            error: false
        }
    }

    zipcodeChange = (event) => {
        console.log("it calls zipcode");
        console.log(event.target.value);
        //store zipcode user entered
        this.setState({zipcode: event.target.value});
        console.log(this.state.zipcode);

    }

    handleSearch = () =>{
        let zipcode = this.state.zipcode;
        //make sure zipcode entered is valid and is a number
        if(zipcode.length != 5 || parseInt(zipcode) != zipcode){
            this.setState({error: true});
            return;
        }
        this.setState({error: false});

        //API call
        let API = 'http://ctp-zip-api.herokuapp.com/zip/' + zipcode;
        console.log("the zipcode sent is " + zipcode);
        fetch(API).then((response) => {
              if(response.status === 404){
                  return;
              }
              return response.json();

        }).then((data) => {

            //change data to string
            let zipcodedata = JSON.stringify((data));
            this.setState({results: true });
            //store data in zipdata
            this.setState({zipdata: zipcodedata, results: true});

            // if data is empty then results were false
            if(zipcodedata.length === 0){
                this.setState({results: false});
            }
        }).catch((error) => {
            console.log('Error', error);
        })
    }



    dataList = () => {
      let result = this.state.results;
        console.log("results " + result);

        //if no results then set table to be empty
        if(!result){
           return <ResultTable empty = "true"/>
        }
        else{
            //send data to table component where it will return html with data
            return <ResultTable empty = "false" data = {this.state.zipdata} error = {this.state.error} />
        }

    }



    render() {
        return (
            <div>
                <div className="black">

                    <h1>Zip Code Search</h1>

                </div>
                ,
                <form>

                    <div id="input" className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Zip Code:</label>
                        <div className="col-sm-10">

                            {/*store data when written with onChange*/}
                            <input type="text" className="form-control" id="inputPassword" placeholder="10016"
                                   // call zipcodeChange function to store zipcode
                                   onChange={this.zipcodeChange}/>
                            {/*       call handle search when clicked*/}
                            <Button variant="primary" onClick={this.handleSearch}>Search</Button>
                        </div>
                    </div>
                </form>,
                <table  className="table-responsive-sm table-bordered table-hover d-sm-table  table-striped zipcode-table">
                    <tbody>
                    {/*data from API*/}
                    {this.dataList()}
                    </tbody>
                </table>

            </div>


        );

    }
}

export default ZipCodeSearch;