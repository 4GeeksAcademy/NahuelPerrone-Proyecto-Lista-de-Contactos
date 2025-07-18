export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contactos:[],
    editContact:{name:"texto"}
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'list_contact':

      const  {newContact}  = action.payload

      return {
        ...store,
      contactos: newContact
    
    }; 
    case 'edit_contact':


      return {
        ...store,
      editContact: action.payload
      };   
        
    default:
      throw Error('Unknown action.');
  }    
}
