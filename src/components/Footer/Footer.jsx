import React from "react";
import {connect} from 'react-redux'
import Statistic from "./Statistic";

function Footer(props) {
  let data = {
    active: props.state.find(item => item.id === 0).card.length,
    finish: props.state.find(item => item.id === 3).card.length,
    year: new Date().getFullYear()
  }

  return (
    <Statistic active = {data.active} year={data.year} finish={data.finish}/>
  );
}

const mapStateToProps = function (state) {
  return {
    state: state.listsReducer,
  };
};

export default connect(mapStateToProps)(Footer);
