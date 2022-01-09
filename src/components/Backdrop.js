function Backdrop(props) {
     return (
         <div>
         <div className='backdrop' onClick={props.onCancel}/>

         </div>
    );
}

export default Backdrop;