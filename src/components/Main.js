import React from "react";
import "./Main.scss";
import AppBar from "../components/app-bar/AppBar";
import AutoCompleteSearch from "../components/search/AutoCompleteSearch";
import ScenariosContainer from "../components/scenarios/ScenariosContainer";
import DropDownListContainer from "../components/drop-downs/DropDownListContainer";
import Container from '@material-ui/core/Container';
import CreateScenarioModal from "./CreateScenarioModal";
import {useDispatch} from "react-redux";
import actions from "../redux/actions/action";
import Card from "@material-ui/core/Card/Card";

function Main() {
    const dispatch = useDispatch();
    const getListScenarios = () => dispatch(actions.getScenariosList());
    const getCategoriesList = () => dispatch(actions.getCategoriesList());
    const getTagsList = () => dispatch(actions.getTagsList());
    const getNodeList = () => dispatch(actions.getNodeList());
    const [showCreateNewScenarioModal, setShowCreateNewScenarioModal] = React.useState(false);
    const [showCreateNodesTreeModal, setShowCreateNodesTreeModal] = React.useState(false);

    const handleShowCreateNewScenarioModalBtnClick = (showCreateNewScenarioModal) => {
        setShowCreateNewScenarioModal(showCreateNewScenarioModal)
    };

    const handleShowCreateNodesTreeModalBtnClick = (showCreateNodesTreeModal) => {
        setShowCreateNodesTreeModal(showCreateNodesTreeModal)
    };

    React.useEffect(() => {
        getListScenarios();
        getTagsList();
        getCategoriesList();
        getNodeList();
    }, []);

    return (
        <React.Fragment>
            <Container fixed>
                <AppBar handleShowCreateNewScenarioModalBtnClick={handleShowCreateNewScenarioModalBtnClick}/>
                <Card className={"card-main"} variant="outlined" >
                    <AutoCompleteSearch/>
                    <DropDownListContainer/>
                </Card>
                <ScenariosContainer/>
                {showCreateNewScenarioModal &&
                <CreateScenarioModal
                    showCreateNewScenarioModal={showCreateNewScenarioModal}
                    showCreateNodesTreeModal={showCreateNodesTreeModal}
                    handleShowCreateNewScenarioModalBtnClick={handleShowCreateNewScenarioModalBtnClick}
                    handleShowCreateNodesTreeModalBtnClick={handleShowCreateNodesTreeModalBtnClick}
                />
                }
            </Container>
        </React.Fragment>
    );
}


export default Main;