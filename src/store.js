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
    contactos:[]  
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

    case 'delete_contact':

      const  {eliminar}  = action.payload

      return {
        ...store,
      contactos: store.contactos.filter((contacto,index)=> index != eliminar)
      };

    case 'list_contact':

      const  {newContact}  = action.payload

      return {
        ...store,
      contactos: newContact
      };  
    default:
      throw Error('Unknown action.');
  }    
}
