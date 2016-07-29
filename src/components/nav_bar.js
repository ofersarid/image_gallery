/**
 * Created by ofersarid on 29/07/2016.
 */

import React from 'react';

const NavBar = ({openForm}) => {


  return (
    <div className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target=".navbar-responsive-collapse">
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <a className="navbar-brand" href="javascript:void(0)">Reacongate</a>
        </div>
        <div className="navbar-collapse collapse navbar-responsive-collapse">
          <ul className="nav navbar-nav">
            {/*<li className="active"><a href="javascript:void(0)">Active</a></li>*/}
            <li><a href="javascript:void(0)" onClick={openForm}>Add Movie</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;