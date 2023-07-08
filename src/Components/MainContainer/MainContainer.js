import React from "react";
import SearchbarContainer from "../SearchbarContainer/SearchbarContainer";
import HeadContainer from "../HeadContainer/HeadContainer";
import ListContainer from "../ListContainer/ListContainer";
import "./MainContainer.css";

function MainContainer() {
  return (<div className="mainContainer">
    <SearchbarContainer
  /*  style={{
    paddingTop: '100px',
    boxSizing: 'content-box',
  }}
  containerStyle={{
    position: 'relative',
    overflow: 'visible'
  }}*/
     />
    <HeadContainer />
  </div>
);

}

export default MainContainer;
