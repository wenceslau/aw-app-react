import './List.css';
import ListItem from '../list-item/ListItem';

function List({ items = [] }) {
  const map = items.map((item) => {
    return (
      <ListItem key={item.id} item={item} />
    );
  });

  return (
    <div className='list-wrapper' data-testid="list">
      <ul className="list">
        {map}
      </ul>
    </div>
  );
}

export default List;
