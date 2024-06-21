import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";


//getting prop from Home route
const HomeItem = ({item}) =>{

    const bagItem = useSelector(store => store.bag)
    const elementFound = bagItem.indexOf(item.id) >= 0;

    const dispatch = useDispatch()

    
const handleAddToBag = () =>{
    dispatch(bagAction.addToBag(item.id))
}

const handleRemoveFromBag = () =>{
    dispatch(bagAction.removeFromBag(item.id))
}


    return(
        <>
         <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound && <button className="btn-add-bag" onClick={handleAddToBag}>Add to Bag</button>}


     { elementFound && <button className="btn-add-bag " style={{backgroundColor:"#B22434", color:"white"}} onClick={handleRemoveFromBag}>Remove from Bag</button>}
    </div>`
        </>
    )
}

export default HomeItem;