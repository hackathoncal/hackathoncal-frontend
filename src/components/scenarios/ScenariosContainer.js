import React, {Component} from 'react';
import ScenarioList from "./ScenarioList";
import ScenarioItem from "./ScenarioItem";
import Card from "@material-ui/core/Card/Card";

import "./ScenariosContainer.scss";

class ScenariosContainer extends Component {
    render() {
        return (
            <div className="scenarios-wrapper">
                <div className="list-scenarios">
                    <Card className={"card"} variant="outlined" >
                        <ScenarioList/>
                    </Card>
                </div>
                <div>
                    <Card className={"card"} variant="outlined" >
                        <ScenarioItem/>
                    </Card>

                </div>
            </div>
        );
    }
}

export default ScenariosContainer;