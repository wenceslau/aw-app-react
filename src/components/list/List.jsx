import ListItem from '../list-item/ListItem.jsx';
import './List.css';

export function List({ items = [] }) {
    const map = items.map((item) => {
        return (
            <ListItem key={item.id} item={item} />
        );
    });

    return (
        <div className='list-wrapper'>
            <ul className='list'>
                {map}
            </ul>
        </div>
    );
}