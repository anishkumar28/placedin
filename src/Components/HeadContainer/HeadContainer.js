import React from "react";
import plusIcon from "../../assets/plus.png"
//import SearchbarContainer from "../SearchbarContainer/SearchbarContainer";
import "./HeadContainer.css";

function HeadContainer() {
  return (<div className="headContainer">
       <div className="wishList">
          <h3 classname="wishlist_text">Wishlist</h3>
          <div className="wishList_add_icon">
             <img className="plusIcon" src={plusIcon} alt="Add" />
          </div>
          <div class="container">
          <div id="wishlist_droppable">
            <div class="list" draggable="true">List</div>
          </div>
          </div>
       </div>

       <div className="applied">
            <h3 className="applied_text">Applied</h3>
          <div className="applied_add_icon">
             <img className="plusIcon" src={plusIcon} alt="Add" />
          </div>
       </div>

       <div className="interview">
            <h3 className="interview_text">Interview</h3>
         <div className="interview_add_icon">
           <img className="plusIcon" src={plusIcon} alt="Add" />
         </div>
      </div>



       <div className ="offer">
            <h3 className="offer_text">Offer</h3>
         <div className="offer_add_icon">
           <img className="plusIcon" src={plusIcon} alt="Add" />
         </div>
      </div>

       <div className="rejected">
            <h3 className="rejected_text">Rejected</h3>
          <div className="rejected_add_icon">
            <img className="plusIcon" src={plusIcon} alt="Add" />
          </div>
      </div>

    </div>

);

}

export default HeadContainer;
