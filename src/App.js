import React, { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

const firstFive = contacts.slice(0, 5);

function App() {
  const [contactArray, setContactArray] = useState(firstFive);

  const randomContact = () => {
    const leng = contacts.length;
    let random = Math.floor(Math.random() * leng);
    setContactArray([...contactArray, contacts[random]]);
  };

  const sortAlphabetically = () => {
    let data = contactArray;
    let sorted = data.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    setContactArray([...sorted]);
  };

  const sortPopular = () => {
    let data = contactArray;
    let sorted = data.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (b.popularity > a.popularity) {
        return 1;
      }
      return 0;
    });
    setContactArray([...sorted]);
  };

  const deleteContact = (key) => {
    const filteredContacts = contactArray.filter((contact) => {
      return contact.id !== key;
    });
    setContactArray([...filteredContacts]);
  };

  const contactsTable = contactArray.map((obj) => (
    <tbody key={obj.id}>
      <tr>
        <td className="text-align-left">
          <img className="profile-picture-height" src={obj.pictureUrl} alt="profile" />
        </td>
        <td className="text-align-left">{obj.name}</td>
        <td className="text-align-left">{obj.popularity}</td>
        {obj.wonOscar && <td className="text-align-left"> 🏆 </td>}
        {obj.wonEmmy && <td className="text-align-left"> 🏆 </td>}
        <button onClick={() => deleteContact(obj.id)}>Delete</button> 
      </tr>
    </tbody>
  ));

  return (
    <div>
      <h4>IronContacts</h4>
      <button onClick={randomContact}>Add random Contact</button>
      <button onClick={sortAlphabetically}>Sort by name</button>
      <button onClick={sortPopular}>Sort by popularity</button>
      <table className="text-align-left">
        <thead>
          <tr>
            <th className="table-head-first">
              <h4 className="text-align-left">Picture</h4>
            </th>
            <th className="table-head-second">
              <h4 className="text-align-left">Name</h4>
            </th>
            <th className="table-head-second">
              <h4 className="text-align-left">Popularity</h4>
            </th>
            <th className="table-head-second">
              <h4 className="text-align-left  ">Won Oscar</h4>
            </th>
            <th className="table-head-second">
              <h4 className="text-align-left">Won Emmy</h4>
            </th>
            <th className="table-head-second">
              <h4 className="text-align-left">Actions</h4>
            </th>
          </tr>
        </thead>
        {contactsTable}
      </table>
    </div>
  );
}
export default App;