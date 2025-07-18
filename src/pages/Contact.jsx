
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PropTypes from "prop-types";

export const Contact = () => {
  const { store } = useGlobalReducer();
  const { contactId } = useParams();

  const [contacto, setContacto] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    id:""
  });

    useEffect(() => {
      console.log(store.editContact)
     setContacto(store.editContact)
    }, []);


  function editContacto() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contacto.name,
        phone: contacto.phone,
        email: contacto.email,
        address: contacto.address,
        is_done: false,
        agenda_slug: "NahuelPerrone"
      }),
    };

    fetch(`https://playground.4geeks.com/contact/agendas/NahuelPerrone/contacts/${contactId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log("Contacto actualizado:", data))
      
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
                value={contacto.name}
                onChange={(e) =>
                  setContacto({ ...contacto, name: e.target.value })
                }
              />
            </div>
            <div className="col-8">
              Phone:
              <input
                type="text"
                className="form-control mt-2"
                value={contacto.phone}
                onChange={(e) =>
                  setContacto({ ...contacto, phone: e.target.value })
                }
              />
            </div>
            <div className="col-8">
              Email:
              <input
                type="text"
                className="form-control mt-2"
                value={contacto.email}
                onChange={(e) =>
                  setContacto({ ...contacto, email: e.target.value })
                }
              />
            </div>
            <div className="col-8">
              Address:
              <input
                type="text"
                className="form-control mt-2"
                value={contacto.address}
                onChange={(e) =>
                  setContacto({ ...contacto, address: e.target.value })
                }
              />
            </div>
            <Link className="text-center" to="/">
              <button
                className="btn btn-success m-1 w-50 mt-4"
                onClick={editContacto}
              >
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

Contact.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};