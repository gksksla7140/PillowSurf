import React from 'react';
import { withRouter } from 'react-router-dom';
import { deletErrors, login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul className='error-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>);
  }

  renderUsernameForm() {
    if (this.props.formType === 'Join') {
      return (
        <div>
        <label>
        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="login-input"
          placeholder='Username'
        />
      </label>
      <br/>
    </div>
      );
    }
  }

  renderModalTitle() {
    if (this.props.formType === 'Join') {
      let closeSession = (e) => {
        e.preventDefault();
        this.props.closeModal();
        store.dispatch(deletErrors());
      };

      return (
        <div className='modal-title-container'>
          <h1>Join Couchsurfing for free</h1>
          <button  onClick={closeSession}>x</button>
        </div>

      );
    }

    return (
      <div className='modal-title-container'>
        <h1>Log in to Couchsurfing</h1>
        <button  onClick={this.props.closeModal}>x</button>
      </div>

    );
  }

  demoLogin() {
    const user = { email: 'demo@demo', password: 'starwars' };
    this.props.login(user);
    this.props.closeModal();
  }

  renderOtherForm() {

    if (this.props.formType === 'Join') {
      return (
        <div className='other-form-container'>
        <p>Already a member?</p>
        {this.props.otherForm}
        <button onClick={this.demoLogin}
          className='demo-button'>DEMO</button>
      </div>
    );
    }

    return (
      <div className='other-form-container'>
      <p>Don't have an account?</p>
      {this.props.otherForm}
      <button onClick={this.demoLogin}
        className='demo-button'>DEMO</button>
    </div>
  );
  }

  whyJoinForm() {
    return (
      <div className='why-join-container'>
        <h1>Why Join?</h1>
        <div className='why-join-content'>
        </div>
      </div>

    );
  }

  render() {

    return (
      <div className="login-form-container">
        {this.renderModalTitle()}
        <form onSubmit={this.handleSubmit} className="login-form-box">

          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder='Email'
              />
            </label>
            <br/>
              {this.renderUsernameForm()}
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder='Password'
              />
            </label>
            <br/>
            <input className="session-submit" type="submit"
             value={this.props.formType} />
          </div>

        </form>
        {this.renderOtherForm()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
