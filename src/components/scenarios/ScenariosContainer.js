import React, {Component} from 'react';
import ScenarioList from "./ScenarioList";
import ScenarioItem from "./ScenarioItem";

import "./ScenariosContainer.scss";

class ScenariosContainer extends Component {
    render() {
        return (
            <div className="scenarios-wrapper">
                <div className="list-scenarios">
                    <ScenarioList/>
                </div>
                <div>
                    <ScenarioItem/>
                </div>
            </div>
        );
    }
}

export default ScenariosContainer;