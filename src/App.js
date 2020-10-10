import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {v4 as uuid} from "uuid";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import SectionContacts from "./components/SectionContacts/SectionContacts";
import Contact from "./components/Contact/Contact";
import Filter from "./components/Filter/Filter";
import ContactNotifyExist from "./components/ContactNotifyExist/ContactNotifyExist";
import "./AppAnimation.css";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
    notify: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const {contacts, notify} = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    if (notify) {
      setTimeout(this.hiddenNotify, 2000);
    }
  }
  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem("contacts");
    if (contactsLocalStorage) {
      this.setState({contacts: JSON.parse(contactsLocalStorage)});
    }
  }

  hiddenNotify = () => {
    this.setState({notify: false});
  }

  addContact = ({name, number}) => {
    const {contacts} = this.state;

    if (name === "" || number === "")
      return;
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      this.setState({notify: true});
      return;
    }
    const contactNew = {
      id: uuid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [...contacts, contactNew],
    }));
    this.clearInputContactData();
  };

  clearInputContactData = () => {
    const inputRefs = document.querySelectorAll(".js-form-input");
    inputRefs.forEach(inputItem => inputItem.value = "");
  }
  deleteContact = idContact => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(({id}) => id !== idContact),
    }));
  }
  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
  }
  changeFilter = event => {
    this.setState({filter: event.target.value});
  }

  render() {
    const visibleContacts = this.getVisibleContacts();
    const {notify, contacts} = this.state;
    return (
      <Layout>
        <CSSTransition timeout={250} in={notify} classNames="ContactNotify" unmountOnExit>
          <ContactNotifyExist/>
        </CSSTransition>
        <ContactForm onSubmit={this.addContact}/>
        <SectionContacts title={"Contacts"}>
          <CSSTransition timeout={250} in={contacts.length > 1} classNames="FilterAnimation" unmountOnExit>
            <Filter onChangeFilter={this.changeFilter}/>
          </CSSTransition>
          <TransitionGroup component="ul" in={(visibleContacts.length > 0).toString()}>
            {visibleContacts.map(({name, number, id}) => (
              <CSSTransition key={id} timeout={250} classNames="ContactsItem">
                <Contact name={name} number={number} onClick={this.deleteContact} id={id}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </SectionContacts>
      </Layout>
    );
  }
}

export default App;
