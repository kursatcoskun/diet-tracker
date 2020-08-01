import React, {useEffect} from "react";
import * as dietDayActions from "../../redux/actions/dietDayActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const DietDaysPage = (props) => {

    useEffect(() => {
        props.actions.getDietDays();
    });

    return (
        <div>
            <h1>Diet Days Page</h1>
        </div>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getDietDays: bindActionCreators(dietDayActions.getDietDays, dispatch),
        },
    };
};

export default connect(null, mapDispatchToProps)(DietDaysPage);
