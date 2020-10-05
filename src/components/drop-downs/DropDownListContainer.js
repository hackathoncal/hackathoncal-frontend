import React, {Component} from 'react';
import MultipleSelect from "./MultipleSelect";
import SimpleSelect from "./SimpleSelect";

import "./DropDownListContainer.scss";


class DropDownListContainer extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<Card className={""} variant="outlined" style={{marginTop:"2vh", padding:"1vh 1vw"}}>*/}

                <div className="drop-down-wrapper">

                    <div style={{marginRight:"2vw"}}>
                        <SimpleSelect/>
                    </div>
                    <div>
                        <MultipleSelect/>
                    </div>
                </div>
                {/*</Card>*/}

            </React.Fragment>
        );
    }
}

export default DropDownListContainer;