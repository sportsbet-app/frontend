import React from "react";

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, isOpen } = this.props;
        //Dont show popup
        if (!isOpen) return null;
        return (
            <div className="popup">
            <div className="container">
            <div className="content">
            {items && 
            items.map((item, idx) =>{
                return (
                    <div className="item" key={idx}>
               {item.name}
               </div>
                );
            })}
            {!items && <div className="warning">Nothing found!</div>}
            </div>
            <div className="footer">Type Keyword for help</div>
            </div>
            </div>
        )
    }
}