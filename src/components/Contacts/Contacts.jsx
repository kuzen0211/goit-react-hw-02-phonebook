import { DeleteBtn, List, Item } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact, upperCaseWord }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            {upperCaseWord(contact.name)}: {contact.number}
            <DeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteBtn>
          </Item>
        );
      })}
    </List>
  );
};
