import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';
import { Button, Table, NavLink, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import ResultTable from "./ResultTable.js"

class ZipCodeSearch extends Component{

    constructor(props) {
        super(props);
        this.state = {
            zipdata: [],
            zipcode: "",
            results: false
        }
    }

    zipcodeChange = (event) => {
        console.log("it calls zipcode");
        console.log(event.target.value);
        this.setState({zipcode: event.target.value});
        console.log(this.state.zipcode);

    }

    // handleSearch = async () => {
    //     let zipcode = this.state.zipcode;
    //
    //         let API = 'http://ctp-zip-api.herokuapp.com/zip/' + zipcode;
    //         try {
    //             console.log("it went to handle search")
    //             let response = await axios.get(API).data;
    //             console.log("the data directly from response " + JSON.stringify(response));
    //             this.setState({zipdata: JSON.stringify(response), results: true});
    //
    //
    //         } catch (e) {
    //             if (e.response) {
    //                 console.log(e.response.data);
    //                 this.setState({results: false});
    //             }
    //
    //         }
    //
    //
    //
    // }

    handleSearch = () =>{
        let zipcode = this.state.zipcode;
        let API = 'http://ctp-zip-api.herokuapp.com/zip/' + zipcode;
        console.log("the zipcode sent is " + zipcode);
        fetch(API).then((response) => {
              if(response.status === 404){
                  return;
              }
              return response.json();

        }).then((data) => {
            console.log("synchrounous data " + JSON.stringify(data));
            let zipcodedata = JSON.stringify((data));
            this.setState({results: true });
            console.log("shows if state is being changed or not " + this.state.results);
            this.setState({zipdata: zipcodedata, results: true});
        }).catch((error) => {
            console.log('Error', error);
        })
    }



    dataList = () => {
      let result = this.state.results;
        console.log("results " + result);
        if(!result){
           return <ResultTable empty = "true"/>
        }
        else{
            console.log("reaches here");
            console.log("the data before it is sent " + this.state.zipdata);
            return <ResultTable empty = "false" data = {this.state.zipdata} />
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
                            <input type="text" className="form-control" id="inputPassword" placeholder="10016"
                                   onChange={this.zipcodeChange}/>
                            <Button variant="primary" onClick={this.handleSearch}>Search</Button>
                        </div>
                    </div>
                </form>,
                <table  className="table-responsive-sm table-bordered table-hover d-sm-table  table-striped zipcode-table">
                    <tbody>
                    {this.dataList()}
                    </tbody>
                </table>

            </div>


        );

    }
}

export default ZipCodeSearch;