import { Component } from 'react';
import { Title } from './Title/Title';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const addContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.state.contacts.find(contact => contact.name === data.name)
      ? Notiflix.Notify.info(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [addContact, ...prevState.contacts],
        }));
  };

  filterContact = text => {
    const normalized = text.target.value.trim().toLowerCase();
    this.setState({ filter: normalized });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  upperCaseWord = data => {
    const arr = data.split(' ');

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(' ');
  };

  render() {
    const { contacts, filter } = this.state;
    const sortedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <div>
        <Title title="Phonebook" />
        <Form onSubmit={this.formSubmitHandler} />

        <Title title="Contacts" />
        <Filter filterContact={this.filterContact} />

        <Contacts
          contacts={sortedContacts}
          deleteContact={this.deleteContact}
          upperCaseWord={this.upperCaseWord}
        />
      </div>
    );
  }
}
