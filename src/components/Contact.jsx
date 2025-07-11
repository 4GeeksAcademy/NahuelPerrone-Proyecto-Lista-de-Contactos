import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Contact = () => {
  const { store, dispatch } = useGlobalReducer();
  const { theId } = useParams();

  // Initialize local state for contact fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const contact = store.contacts?.find(contacto => contacto.id === parseInt(theId));
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setAddress(contact.address);
    }
  }, [store.contactos, theId]);

  function editContacto() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        address,
        is_done: false,
      }),
    };

    fetch(`https://playground.4geeks.com/contact/agendas/NahuelPerrone/contacts` + theId , requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "list_contact",
          payload: data,
        });
      })
  }

  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <div className="input-group input-group-sm mb-3 row d-flex justify-content-center">
            <div className="col-8">
              Name:
              <input
                type="text"
                className="form-control mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-8">
              Phone:
              <input
                type="text"
                className="form-control mt-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="col-8">
              Email:
              <input
                type="text"
                className="form-control mt-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-8">
              Address:
              <input
                type="text"
                className="form-control mt-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Link className="text-center" to="/">
              <button className="btn btn-success m-1 w-50 mt-4" onClick={editContacto}>
                Save
              </button>
            </Link>
          </div>
        </li>
      </ul>
      <Link to="/">
        <button className="btn btn-primary mt-2">Back home</button>
      </Link>
    </div>
  );
};
