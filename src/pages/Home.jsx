import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect (()=>{
	let listaContactos =[
		  {
        "name": "carlos",
        "phone": "xxx",
      },
      {
        "name": "laura",
        "phone": "xxx",
      }
	]
	  dispatch({
        type: "list_contact",
        payload: {newContact:listaContactos},
      });
        

  },[])
   
  function deleteContact (indexToDelete) {
          dispatch({
            type: "delete_contact",
            payload: {eliminar:indexToDelete},
          });
        };

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
				  <ul className="list-group">
					{store && store.contactos?.map((item, index) => {
					  return (
						<li
						  key={index}  // React key for list items.
						  className="list-group-item d-flex justify-content-between">
						  <div>
							<p>Name: {item.name} </p>
							<p>Phone: {item.phone} </p>
						  </div>
						  <div> 
							  <button className="btn btn-success"
								onClick={() =>deleteContact(index)}>
								Change Color
							  </button>
						
						  </div>
						</li>
					  );
					})}
				  </ul>
		</div>
	);
}; 