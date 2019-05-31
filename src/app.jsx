import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import NavComponent from "./components/navigationComponent/nav";
import AccountList from "./components/accountList";
import RecordList from "./components/recordList";
import "./scss/main.scss";
import "./components/global.scss";

const App = ({ records, accounts, ...props }) => (
  <Router>
    <NavComponent />
    <div className="container main-content">
      <RecordList records={records} {...props} />
      <AccountList accounts={accounts} {...props} />
    </div>
  </Router>
);

App.propTypes = {
  records: propTypes.arrayOf(propTypes.object).isRequired,
  accounts: propTypes.arrayOf(propTypes.object).isRequired
};

function mapStateToProps({ records, accounts }) {
  return {
    records,
    accounts
  };
}

export default connect(mapStateToProps)(App);
