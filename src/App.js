import './App.css';
import { useState } from 'react';
import GroceryItem from './Components/GroceryItem';
import groceries from './groceries'
import { ListGroup } from 'react-bootstrap';

function App() {
  
// setting up and using state, state's initial value is the array of groceries
  const [grList, setGrList] = useState(groceries)
 
  const addItem = e => {
    e.preventDefault()
    setGrList(grList.concat([
      {
      item: document.querySelector('input[name="item"]').value,
      brand: document.querySelector('input[name="brand"]').value,
      units: document.querySelector('input[name="units"]').value,
      quantity: document.querySelector('input[name="quantity"]').value,
      isPurchased:false
      
    }
  ])
  )
  console.log(grList)}

  return (
    
    <div className="App">
    <h1> My Grocery List</h1>
      <div className='body'>
        
            {grList.map((ele, idx) => {
          
          return( !ele.isPurchased && <GroceryItem ele={ele} key={idx}/>  )

        })}
      </div>
      <div className='form'>
          <form onSubmit={addItem}>
            <h3>Add an item to your list</h3>
            <input type='text' name="item" placeholder='Item'></input> <br/>
            <input type='text' name="brand" placeholder ="brand"></input><br/>
            <input type='text' name="units" placeholder='units'></input><br/>
            <input type='number' name="quantity" placeholder='quantity'></input><br/>
            <input type='submit' value='submit' className='submit'></input>
        </form>
        <h3>We have {grList.length} items In stack</h3>

      </div>

    
      </div>
  );
}

export default App