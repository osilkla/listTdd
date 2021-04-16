import ListItem from "./ListItem";

 
function List({items}) {
  if(!items){
    return <div>No items provide</div>
  }
  return (
    <div>
      {
        items.map((value)=>{
          <ListItem item={value}/>
        })
      }
      
    </div>
  );
}

export default List;
