// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useState } from "react";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

    function nuevoContacto (){
      const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
              body: JSON.stringify({
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
                  is_done: false,
              }),
      };

      fetch("https://playground.4geeks.com/contact/agendas/NahuelPerrone/contacts", requestOptions)
        .then((response) => response.text())
        .then((data) => 
          dispatch({
                      type: "list_contact", 
                      payload:  data 
                    })
      )

}

  return (
    <div className="container">
      <ul className="list-group">

            <li
              className="list-group-item d-flex justify-content-between"> 
  
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
                <button className="btn btn-success m-1 w-50 mt-4" 
                  onClick={nuevoContacto}>
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
