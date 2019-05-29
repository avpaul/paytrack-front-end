import React, { Component } from 'react';
import propTypes from 'prop-types';
import { createAccount } from '../actions';
import Account from './account';
import Btn from './btn';
import Input from './input';
import Dialog from './dialog';
import './list.scss';

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      account: {
        name: '',
        balance: '',
      },
    };
  }

  createAccount = () => {
    const { account } = this.state;
    const { dispatch } = this.props;
    dispatch(createAccount(account));
  };

  onInputChanged = (value, name) => {
    const { account } = this.state;
    account[name] = value;
    this.setState(account);
  };

  renderAccounts = () => {
    const { accounts } = this.props;
    return accounts.map(account => (
      <Account name={account.name} balance={account.balance} key={account.id} />
    ));
  };

  render() {
    const { isModalActive } = this.state;
    return (
      <div
        className="list-wrapper account-list-wrapper"
      >
        <h3 className="list-title">your accounts</h3>
        <div className="account-list">{this.renderAccounts()}</div>

        <Btn
          className="btn-icon btn-add-account btn-round"
          handler={() => {
            this.setState({ isModalActive: true });
          }}
        >
          <i className="material-icons">add</i>
        </Btn>

        {isModalActive && (
          <Dialog classNames="modal-new-account" isActive>
            <h3 className="modal-header">
              <i className="material-icons icon">list_alt</i>
              &nbsp;New account
            </h3>

            <div className="modal-body">
              <Input
                label="name"
                name="name"
                id="new-account-name"
                type="text"
                onChange={this.onInputChanged}
              />
              <Input
                label="balance"
                name="balance"
                id="new-account-balance"
                type="number"
                onChange={this.onInputChanged}
              />
            </div>
            <div className="modal-actions btn-group">
              <Btn
                className="btn-icon btn-outline btn-cancel-account"
                text="cancel"
                handler={() => {
                  this.setState({ isModalActive: false });
                }}
              >
                <i className="material-icons">cancel</i>
              </Btn>
              <Btn
                className="btn-icon btn-create-account"
                text="create"
                type="button"
                handler={() => {
                  this.setState({ isModalActive: false });
                  this.createAccount();
                }}
              >
                <i className="material-icons">check</i>
              </Btn>
            </div>
          </Dialog>
        )}
      </div>
    );
  }
}

AccountList.propTypes = {
  dispatch: propTypes.func,
  accounts: propTypes.arrayOf(propTypes.object).isRequired,
};

export default AccountList;
