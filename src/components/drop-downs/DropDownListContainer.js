import React, {Component} from 'react';
import MultipleSelect from "./MultipleSelect";
import SimpleSelect from "./SimpleSelect";
import "./DropDownListContainer.scss";


class DropDownListContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="drop-down-wrapper">
                    <div>
                        <SimpleSelect/>
                    </div>
                    <div>
                        <MultipleSelect/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DropDownListContainer;