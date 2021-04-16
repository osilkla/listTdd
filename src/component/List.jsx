import ListItem from "./ListItem";

 
function List({items}) {
  if(!items){
    return <div>No items provide</div>
  }
  return (
    <ul>
      {
        items.map((value)=>{
          return <ListItem item={value}key={value}/>
        })
      }
    </ul>
  );
}

export default List;
