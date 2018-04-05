let addressBook = []; //array kosong

const addButton = document.getElementById("buttonAdd"); //deklarasi variable (convert id html ke id js)
const contacts = document.getElementById("contacts"); //deklarasi variable (convert id html ke id js)
const delButton = document.getElementById("buttonDel"); //deklarasi variable (convert id html ke id js)

const addAndShow = () => { // function buttonAdd event
  addContact(); //call addContact function
  showContacts(); //call showContacts function
}

addButton.addEventListener("click", () => { // function buttonAdd event
  addContact(); //call addContact function
  showContacts(); //call showContacts function
});


delButton.addEventListener("click", () => {
    contacts.innerHTML= "";
    localStorage.clear();
    addressBook = [];
});



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
  addressBook.map(function(contact, index){
    const li = document.createElement("li"); //"li" declaration
    li.id = index;

    li.innerHTML = `
    <button onclick="deleteContact(${index})">delete</button>
    <button onclick="editContact(${index})">edit</button> 
      ${contact.firstname} ${contact.lastname}
    `;
    contacts.append(li);
  })
};

const editContact = (index) => {
  let edit = prompt("Edit contact first name");
  addressBook[index].firstname = edit;
  let edit2 = prompt("Edit contact last name");
  addressBook[index].lastname = edit2;
  localStorage.addressBook = JSON.stringify(addressBook);
  showContacts();
}

const deleteContact = (index) => {
  addressBook.splice(index, 1) // Delete data from store
  localStorage.addressBook = JSON.stringify(addressBook); // Add list to localStorage
  showContacts() // Show list
}

if (localStorage.addressBook){ //function to keep previous array of addressBook
  addressBook = JSON.parse(localStorage.addressBook);
  showContacts()
}
