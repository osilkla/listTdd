import ListItem from "./ListItem";

 
function List({items}) {
  if(!items){
    return <div>No items provide</div>
  }
  const orderItems = items.sort((a,b)=>a-b) 
  return (
    <ul>
      {
        orderItems.map((value)=>{
          return <ListItem item={value}key={value}/>
        })
      }
    </ul>
  );
}

export default List;
