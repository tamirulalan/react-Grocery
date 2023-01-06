const GroceryItem = ({ele}) => {
    return (
      <div className = 'each'>
      <br/>
    <h3>item: {ele.item}</h3>
    <h4>brand: {ele.brand}</h4>
    <h5>units: {ele.units}</h5>
    <h5>quantity: {ele.quantity}</h5>
    <h5>isPurchased: </h5> <span><input value={ele.isPurchased} type="checkbox" /></span> 
  {/* <h4>Purchased?:</h4> 
      {ele.isPurchased === true ? 
      (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)} */}
  </div>
    )
  }
  
  export default GroceryItem