import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
    handleClick = ButtonName => {
        this.props.clickHandler(buttonName);
    };

    render () {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="÷" clickHadler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="7" clickHadler={this.handleClick} />
                    <Button name="8" clickHadler={this.handleClick} />
                    <Button name="9" clickHadler={this.handleClick} />
                    <Button name="X" clickHadler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="4" clickHadler={this.handleClick} />
                    <Button name="5" clickHadler={this.handleClick} />
                    <Button name="6" clickHadler={this.handleClick} />
                    <Button name="-" clickHadler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="1" clickHadler={this.handleClick} />
                    <Button name="2" clickHadler={this.handleClick} />
                    <Button name="3" clickHadler={this.handleClick} />
                    <Button name="+" clickHadler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name="0" clickHadler={this.handleClick} wide />
                    <Button name="." clickHadler={this.handleClick} />
                    <Button name="=" clickHadler={this.handleClick} orange />
                </div>
            </div>
        );
    }
}

ButtonPanel.PropTypes = {
    clickHandler: PropTypes.func,
};

export default ButtonPanel;