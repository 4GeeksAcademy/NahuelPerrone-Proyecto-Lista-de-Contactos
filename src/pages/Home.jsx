import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  function getContact (){
	  fetch("https://playground.4geeks.com/contact/agendas/NahuelPerrone/contacts")
	  .then((Response)=>Response.json())
	  .then((data) =>{
		  dispatch({
			type: "list_contact",
			payload: {newContact:data.contacts},
		  });
	  })
	
  }

  useEffect (()=>{
	getContact ()
  },[])
   
  function deleteContact (idToDelete) {
	const requestOptions = {
	method: "DELETE",
	redirect: "follow"
	};

		fetch("https://playground.4geeks.com/contact/agendas/NahuelPerrone/contacts/" + idToDelete, requestOptions)
		.then((response) => response.text())
		.then((result) => getContact ())
		};
			
	return (
		<div className="text-center mt-5">
				  <ul className="list-group">
					{store && store.contactos?.map((item, index) => {
					  return (
						<li
						  key={index}  // React key for list items.
						  className="list-group-item d-flex justify-content-between w-50 m-auto mt-1 border-3">
						  <div className="d-flex justify-content-between">
							<img src="src/assets/img/rigo-baby.jpg" alt={{width:"18px"}} />
						  <div className="m-4">
							<p>Name: {item.name} </p>
							<p>Phone: {item.phone} </p>
							<p>Email: {item.email} </p>
							<p>Address: {item.address} </p>
						  </div>
						  </div>
						  <div> 
							<Link to="/Demo">
							  <button className="btn btn-success btn-sm m-1">
								editar
							  </button>
							</Link>
						  </div>
						   <div> 
							  <button className="btn btn-danger btn-sm m-1"
								onClick={() =>deleteContact(item.id)}>
								delet
							  </button>
						
						  </div>
						</li>
					  );
					})}
				  </ul>
		</div>
	);
}; 