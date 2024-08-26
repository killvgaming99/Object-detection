// Simulated contacts data
const contacts = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '987-654-3210' },
    { name: 'Alice Johnson', phone: '555-555-5555' },
    { name: 'Bob Brown', phone: '444-444-4444' },
];

// Function to display contacts in a ListView
function displayContacts() {
    const contactList = document.getElementById('contactList');
    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.name} - ${contact.phone}`;
        contactList.appendChild(listItem);
    });
}

// Call the function to display contacts on page load
window.onload = displayContacts;
