import React, { Component } from 'react';
import axios from 'axios';

function convertNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

class TotalDeaths extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalDeaths: []
        }
    }
    
    componentWillMount() {
        axios.get("https://corona.lmao.ninja/v2/countries?sort=deaths").then(response =>{
            let totalDeaths = [];
            response.data.forEach(data =>{
                totalDeaths.push(<li><span className="color-red">{convertNumber(data.deaths)}</span>{data.country}</li>)
            })
            this.setState({totalDeaths: totalDeaths})
        })
    }

    render() {
        return (
            <div id="col-total-deaths" className="column-data">
                <div className="title-deaths title">Số người chết <p>{this.props.deaths}</p></div>
                <div className="content">
                    <ul>
                        {this.state.totalDeaths}
                    </ul>
                </div>
                <div className="btn-group">
                    <div className="btn-view col-total-deaths active">Số người chết</div>
                    <div className="btn-view col-today-deaths">Số người chết hôm nay</div>
                </div>
            </div>
        )
    }
}

class TotalRecoverd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalRecovered: []
        }
    }

    componentWillMount(){
        axios.get('https://corona.lmao.ninja/v2/countries?sort=recovered').then(response => {
            let totalRecovered = [];
            response.data.forEach(data =>{
                totalRecovered.push(<li><span className="color-blue">{convertNumber(data.recovered)}</span>{data.country}</li>)
            })
            this.setState({totalRecovered: totalRecovered})
        })
    }

    render() {
        return (
            <div className="column-data" id="col-total-recovered">
                <div className="title-recovered title">Số khỏi bệnh <p>{this.props.recovered}</p></div>
                <div className="content">
                    <ul>
                        {this.state.totalRecovered}
                    </ul>
                </div>
                <div className="btn-group">
                    <div className="btn-view col-total-recovered active">Số người khỏi bệnh</div>
                    <div className="btn-view col-new-patients">Số người mắc mới hôm nay</div>
                </div>
            </div>
        )
    }
}

class TotalDeathsTodayEachCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalDeathsTodayEachCountry: []
        }
    }

    componentWillMount() {
        axios.get("https://corona.lmao.ninja/v2/countries?sort=todayDeaths").then(res => {
            let totalDeathsTodayEachCountry = [];
            res.data.forEach(data => {
                totalDeathsTodayEachCountry.push(<li><span className="color-red">{convertNumber(data.todayDeaths)}</span>{data.country}</li>);
            })
            this.setState({totalDeathsTodayEachCountry: totalDeathsTodayEachCountry});
        })
    }

    render() {
        return (
            <div className="column-data" id="col-today-deaths">
                <div className="title-deaths title">Số người chết hôm nay<p>{this.props.todayDeaths}</p></div>
                <div className="content">
                    <ul>
                        {this.state.totalDeathsTodayEachCountry}
                    </ul>
                </div>
                <div className="btn-group">
                    <div className="btn-view col-total-deaths">Số người chết</div>
                    <div className="btn-view col-today-deaths active">Số người chết hôm nay</div>
                </div>
            </div>
        )
    }
}

class TotalNewPatientsToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPatientsToday: null
        }
    }

    componentWillMount(){
        axios.get("https://corona.lmao.ninja/v2/countries?sort=todayCases").then(res => {
            let newPatientsToday = [];
            res.data.forEach(data => {
                newPatientsToday.push(<li><span className="color-blue">{convertNumber(data.todayCases)}</span>{data.country}</li>)
            })
            this.setState({newPatientsToday: newPatientsToday})
        })
    }

    render() {
        return (
            <div className="column-data" id="col-new-patients">
                <div className="title-recovered title">Số ca mắc mới <p>{this.props.newPatientsToday}</p></div>
                <div className="content">
                    <ul>
                        {this.state.newPatientsToday}
                    </ul>
                </div>
                <div className="btn-group">
                    <div className="btn-view col-total-recovered ">Số người khỏi bệnh</div>
                    <div className="btn-view col-new-patients active">Số người mắc mới hôm nay</div>
                </div>
            </div>
        )
    }
}

class InforOfVietNam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCases: null,
            totalDeaths: null,
            newPatientsToday: null,
            totalRecovered: null,
        }
    }

    componentWillMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/704").then(res => {
            this.setState({
                totalCases: res.data.cases,
                totalDeaths: res.data.deaths,
                newPatientsToday: res.data.todayCases,
                totalRecovered: res.data.recovered,
            })
        })
    }

    render() {
        return (
            <div className="infor-of-vietnam">
                <h1>VIỆT NAM</h1>
        <h3>Tổng số người mắc: <span className="color-red">{this.state.totalCases}</span></h3>
                <h3>Số người đã được chữa khỏi: <span>{this.state.totalRecovered}</span></h3>
                <h3>Số người mắc mới trong hôm nay: <span className="color-red">{this.state.newPatientsToday}</span></h3>
                <h3>Số người chết: <span className="color-red">{this.state.totalDeaths}</span></h3>
                <h3>Tỷ lệ tử vong: <span className="color-red">0%</span></h3>
            </div>
        )
    }
}

class dashBroadRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalRecovered: null,
            totalDeaths: null,
            todayDeaths: null,
            newPatientsToday: null,
        }
    }

    componentWillMount(){
        axios.get("https://corona.lmao.ninja/v2/all").then(res => {
            this.setState({totalRecovered: convertNumber(res.data.recovered)});
            this.setState({totalDeaths: convertNumber(res.data.deaths)});
            this.setState({todayDeaths: convertNumber(res.data.todayDeaths)});
            this.setState({newPatientsToday: convertNumber(res.data.todayCases)})
        })
    }

    render() {
        return (
            <div className="big-col-right">
                <div className="top-component">
                    <TotalDeaths deaths={this.state.totalDeaths}/>
                    <TotalDeathsTodayEachCountry todayDeaths={this.state.todayDeaths}/>
                    <TotalRecoverd recovered={this.state.totalRecovered}/>
                    <TotalNewPatientsToday newPatientsToday={this.state.newPatientsToday}/>
                </div>
                <div className="bottom-component">
                    <InforOfVietNam />
                </div>
            </div>
        );
    }
}

export default dashBroadRight;