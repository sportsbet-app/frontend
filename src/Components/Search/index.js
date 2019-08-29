import React from "react";

import Popup from "./popup";

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isPopupOpen: false,
            sports: [],
            errors: [],
            isError: false
        };
    }

    async fetchData() {
        const sports= await fetch("/").catch((err) => {
this.setError("Cannot load data from server")
            //todo: handle errors
        })
        this.setState({ sports: (await sports)})
    }

    componentDidMount() {
this.fetchData();
    }

    searchSports(keyword){
const { sports } = this.state;
    }

    onInputChange(e) {
const keyword = e.target.value;
this.searchSports(keyword)
    }


    onInput(e) {
if (e.target.value !== "") this.showPopup();
else this.hidePopup();
//show up popup

showPopup(){
this.setState({isPopupOpen:true});
}

hidePopup(){
    this.setState({isPopupOpen:false});
}

SetError(msg) {
    this.setState((prevState) => ({errors: [...prevState.errors, msg], isError: true}));
}

clearError(msg) {
    this.setState({errors: [], isError: false});
}
    }

    render() {
        const { isPopupOpen } = this.state;
        return(
            <div className="search">
            <div className="search-container">
            <div className="title">Need Help?</div>
            <div className="content">
            <input type="text" placeholder="SportsSearch" onInput={this.onInput.bind(this)} onChange={this.onInputChange.bind()}></input>
            <Popup
            isOpen={isPopupOpen
            items={[{name: "sports"}, {name: "sports"}]}
            />
            </div>
            </div>
            </div>
        )
    }
    }