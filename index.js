let addressBook = [];

const addButton = document.getElementById("buttonAdd");
const contacts = document.getElementById("contacts");
const delButton = document.getElementById("buttonDel");

addButton.addEventListener("click", () => {
  addContact();
  showContacts();
});

delButton.addEventListener("click", () => localStorage.clear() );

const addContact = () =>{
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  if (firstName && lastName !== 0){
    addressBook.push({firstname : firstName, lastname : lastName});
    console.log(firstName + " " + lastName + "is added as a contact");
    document.getElementById("fullNameContact").value = firstName + " " +lastName;
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    localStorage.addressBook = JSON.stringify(addressBook);
  }else{
    alert("Input can't be empty");
  }
}

const showContacts = () => {
  contacts.innerHTML = "";
  addressBook.map(function(contact){
    const li = document.createElement("li");
    const contactNode = document.createTextNode(contact.firstname + " " + contact.lastname);
    li.appendChild(contactNode);

    contacts.append(li);
  })
};

if (localStorage.addressBook){
  addressBook = JSON.parse(localStorage.addressBook);
  showContacts()
}
