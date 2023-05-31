import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <div className="Travel_destination-first_text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="Travel_destination-image">
                    <img src={this.props.img1} alt="erawan falls image 1"/>
                    <img src={this.props.img2} alt="erawan falls image 2"/>
                </div>       
            </div>
        )
    }
}

export default DestinationData;