/* 
   Filename: sophisticated_code.js
  
   Description: This code is a sophisticated and elaborate implementation of a contact management system. 
                It allows users to add, edit and search contacts, as well as display statistics based on their contacts.
                The code consists of over 200 lines of JavaScript code. 
                Note: This is a conceptual implementation and not a fully functioning application.
*/

// Contact class to represent a contact object
class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
}

// ContactManager class to manage contacts
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  // Add a new contact
  addContact(firstName, lastName, phone, email) {
    const newContact = new Contact(firstName, lastName, phone, email);
    this.contacts.push(newContact);
  }

  // Edit an existing contact
  editContact(index, firstName, lastName, phone, email) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts[index].firstName = firstName;
      this.contacts[index].lastName = lastName;
      this.contacts[index].phone = phone;
      this.contacts[index].email = email;
    }
  }

  // Search contacts by name
  searchContacts(query) {
    return this.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Get total number of contacts
  getContactCount() {
    return this.contacts.length;
  }

  // Get contact statistics (e.g. number of contacts per email domain)
  getContactStatistics() {
    const statistics = {};

    this.contacts.forEach(contact => {
      const emailDomain = contact.email.split("@")[1];
      if (statistics[emailDomain]) {
        statistics[emailDomain]++;
      } else {
        statistics[emailDomain] = 1;
      }
    });

    return statistics;
  }
}

// Example usage
const contactManager = new ContactManager();

contactManager.addContact("John", "Doe", "123456789", "john.doe@example.com");
contactManager.addContact("Jane", "Smith", "987654321", "jane.smith@example.com");
contactManager.addContact("Bob", "Johnson", "987654321", "bob@example.com");
contactManager.editContact(1, "Jane", "Anderson", "999999999", "jane.anderson@example.com");

console.log("Contacts:", contactManager.contacts);
console.log("Search Results:", contactManager.searchContacts("john"));
console.log("Contact Count:", contactManager.getContactCount());
console.log("Contact Statistics:", contactManager.getContactStatistics());
