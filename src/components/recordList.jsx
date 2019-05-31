import React, { Component, Fragment } from "react";
import propTypes from "prop-types";
import { createRecord } from "../actions";
import Record from "./record";
import Dialog from "./dialog";
import Btn from "./btn";
import Input from "./input";
import Select from "./select";
import "./list.scss";

class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      record: {}
    };
  }

  addNewRecord = () => {
    this.setState({ isModalActive: false });
    const { record } = this.state;
    const { dispatch } = this.props;
    dispatch(createRecord(record));
  };

  showRecordModel = () => {};

  renderAccounts = () => {
    const { records } = this.props;
    return records.map(record => (
      <Record
        category={record.category}
        account={record.account}
        notes={record.notes}
        amount={record.amount}
        date={record.date}
        type={record.type}
        handler={this.showRecordModel}
        key={record.id}
      />
    ));
  };

  onInputChanged = (value, name) => {
    const { record } = this.state;
    record[name] = value;
    this.setState(record);
  };

  render() {
    const { isModalActive } = this.state;
    return (
      <Fragment>
        <div className="list-wrapper record-list-wrapper">
          <h3 className="list-title">records</h3>
          <div className="list record-list">{this.renderAccounts()}</div>
          <Btn
            className="btn-icon btn-add-record btn-round"
            handler={() => {
              this.setState({ isModalActive: true });
            }}
          >
            <i className="material-icons">edit</i>
          </Btn>
        </div>
        {isModalActive && (
          <Dialog classNames="modal-new-record" isActive>
            <h3 className="modal-header">
              <i className="material-icons icon">list_alt</i>
              &nbsp;New record
            </h3>

            <div className="modal-body">
              <Select
                label="type"
                name="type"
                id="new-record-type"
                options={["income", "expense", "transfer"]}
                onChange={this.onInputChanged}
              />
              <Select
                label="account"
                name="account"
                id="new-record-account"
                options={["cash", "bk", "momo"]}
                onChange={this.onInputChanged}
              />
              <Select
                label="category"
                name="category"
                id="new-record-category"
                options={["income", "life & entertainment", "clothes & shoes"]}
                onChange={this.onInputChanged}
              />
              <Input
                label="amount"
                name="amount"
                id="new-record-notes"
                type="number"
                onChange={this.onInputChanged}
              />
              <Input
                label="notes"
                name="notes"
                id="new-record-notes"
                type="text"
                onChange={this.onInputChanged}
              />
            </div>

            <div className="modal-actions btn-group">
              <Btn
                className="btn-outline btn-icon btn-cancel-record"
                text="cancel"
                handler={() => {
                  this.setState({ isModalActive: false });
                }}
              >
                <i className="material-icons">cancel</i>
              </Btn>
              <Btn
                className="btn-icon btn-create-record"
                text="create"
                type="button"
                handler={this.addNewRecord}
              >
                <i className="material-icons">check</i>
              </Btn>
            </div>
          </Dialog>
        )}
      </Fragment>
    );
  }
}

RecordList.propTypes = {
  dispatch: propTypes.func,
  records: propTypes.arrayOf(propTypes.object).isRequired
};

export default RecordList;
