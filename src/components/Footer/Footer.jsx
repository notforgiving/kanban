import React from "react";
import {connect} from 'react-redux'
import Statistic from "./Statistic";

function Footer(props) {
  let data = {
    active: 0,
    finish: 0,
    year: ''
  }

  let today = new Date();
  data.year =  today.getFullYear();

  props.state.forEach(item=>{
    if (item.id===0){
      item.card.forEach(card=>{
        data.active++;
      })
    }
    else if(item.id===3){
      item.card.forEach(card=>{
        data.finish++;
      })
    }
  })

  return (
    <Statistic date={data}/>
  );
}

const mapStateToProps = function (state) {
  return {
    state: state.listsReducer,
  };
};

export default connect(mapStateToProps)(Footer);
