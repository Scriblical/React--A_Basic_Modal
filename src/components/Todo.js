import  {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo ( props ) {
  const [ modalIsOpen, setModalIsOpen ] = useState(  false );
  console.log('page is loaded')


  function deleteHandler() {
    setModalIsOpen(true);
    console.log('Step 2, Delete Button has been clicked')
  }

  function closeModalHandler() {
      setModalIsOpen(false)
  }

  return (

    <div className='card'>
      <h2>{ props.text } </h2>
      <div className='actions'>
      <button className='btn' onClick={deleteHandler}>Delete </button>
    </div>

      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

   </div>



    );
  }

  export default Todo