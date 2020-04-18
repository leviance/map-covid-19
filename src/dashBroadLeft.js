import React, { Component } from 'react';
import axios from 'axios';

function convertNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

function TotalPatients(props) {
    return(
        <div className="total-patients">
            Tổng số người mắc : <span>{props.content}</span>
        </div>
    )
}


class TotalPatientsEachCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataToRender: []
        }
    }

    componentWillMount(){
        axios.get("https://corona.lmao.ninja/v2/countries?sort=cases").then((response) => {
            let dataRes = [];
            response.data.forEach(data => {
                dataRes.push(<li><span>{convertNumber(data.cases)}</span>{data.country}</li>);
            })
            this.setState({dataToRender: dataRes});  
        });

    }

    render() {
        return (
            <div className="total-patients-each-country">
                <div className="title">Số người mắc theo từng quốc gia : </div>
                <ul>
                    {this.state.dataToRender}
                </ul>
            </div>
        )
    }
}



class DashBroadLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TotalPatients: null,
        }
    }

    
    componentWillMount() {
        axios.get("https://corona.lmao.ninja/v2/all")
        .then((res) => {
            this.setState({TotalPatients: convertNumber(res.data.cases)})
        });
    }
    
   

    render() {
        return (
            <div className="big-col-left">
                <TotalPatients content={this.state.TotalPatients} />
                <TotalPatientsEachCountry />
            </div>
        );
    }
}

export default DashBroadLeft;


