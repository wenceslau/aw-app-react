import './ListItem.css';
import Heart from '../heart/Heart';
import favoriteStore from '../../store/favoriteStore';


function ListItem({item}) {

 const items = favoriteStore(state => state.items);
 const addItem = favoriteStore(state => state.addItem);
 const removeItem = favoriteStore(state => state.removeItem);

  const {name, sprites} = item;
  const sprite = sprites.other['official-artwork'].front_default;
  const isFavorite =  items.includes(item.id);

  const handleClick = () => {
    if (isFavorite) {
      removeItem(item.id);
    } else {
      addItem(item.id);
    }
  };
  return (
    <li className="list-item">
      <div className="list-item-image-wrapper">
        <img alt={name} className="list-item-image" src={sprite}/>
      </div>
      <p>{name}</p>
      <div className="list-item-heart-wrapper">
        <Heart onClick={handleClick} selected={isFavorite} />
      </div>
    </li>
  );
}

export default ListItem;
