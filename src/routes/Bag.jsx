import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {


const bagItems = useSelector(store => store.bag) // Initializing useSelector to subscribe/get value
const items = useSelector(store => store.items)
const finalItems = items.filter(item =>{
  const itemIndex = bagItems.indexOf(item.id)
  return itemIndex >= 0;
})

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        {finalItems.map(item =>  <BagItem item={item} key={item.id}/>)}
    
        </div>
        <BagSummary/>
      </div>
    </main>
  );
};

export default Bag;
