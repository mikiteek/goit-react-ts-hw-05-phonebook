import React, {Component} from "react";
import {CSSTransition} from "react-transition-group";
import styles from "./ContactForm.module.scss";
import "./ContactFormAnimation.css";

interface propTypes {
  onSubmit: any,
}

interface stateTypes {
  name: string,
  number: string,
}

class ContactForm extends Component<propTypes, stateTypes> {
  state = {
    name: "",
    number: "",
  }

  private handleSubmit = (event: any): void => {
    event.preventDefault();
    const {name, number} = this.state;

    this.props.onSubmit({name, number});
    this.setState({name: "", number: ""});
  }
  private handleChange = (event: any): void => {
    const {name, value}:{name: string, value: string} = event.target;
    this.setState({[name]: value} as any);
  }

  render() {
    const inputStyles = [styles.formElement, styles.formInput, "js-form-input"].join(" ");
    return (
      <section className={styles.sectionContacts}>
        <CSSTransition in={true} appear={true} timeout={500} classNames="ContactFormTitle" unmountOnExit>
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <form className={styles.formContacts} onSubmit={this.handleSubmit}>
          <label className={styles.formElement} htmlFor="name">Name</label>
          <input className={inputStyles} type="text" name="name" onChange={this.handleChange}/>
          <label className={styles.formElement} htmlFor="number">Number</label>
          <input className={inputStyles} type="text" name="number" onChange={this.handleChange}/>
          <br/>
          <button className={styles.btn} type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}
export default ContactForm;