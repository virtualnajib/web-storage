let addressBook = []; //array kosong

const addButton = document.getElementById("buttonAdd"); //deklarasi variable (convert id html ke id js)
const contacts = document.getElementById("contacts"); //deklarasi variable (convert id html ke id js)
const delButton = document.getElementById("buttonDel"); //deklarasi variable (convert id html ke id js)

addButton.addEventListener("click", () => { // function buttonAdd event
  addContact(); //call addContact function
  showContacts(); //call showContacts function
});

delButton.addEventListener("click", () => localStorage.clear() ); // delete button event

const addContact = () =>{
  const firstName = document.getElementById("firstName").value; //deklarasi variable firstname (convert id html ke id js)
  const lastName = document.getElementById("lastName").value; //deklarasi variable firstname (convert id html ke id js)
  if (firstName && lastName !== 0){ //if the textbox of firstname and lastname not null
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

const showContacts = () => { //function to show contact and create node (appendchild)
  contacts.innerHTML = "";
  addressBook.map(function(contact){
    const li = document.createElement("li"); //"li" declaration
    const contactNode = document.createTextNode(contact.firstname + " " + contact.lastname);
    li.appendChild(contactNode);

    contacts.append(li);
  })
};

if (localStorage.addressBook){ //function to keep previous array of addressBook
  addressBook = JSON.parse(localStorage.addressBook);
  showContacts()
}
