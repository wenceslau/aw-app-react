import { useNavigate } from 'react-router-dom';
import { users } from '../../data';
import { List } from '../../components/list/List.jsx';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        const { id } = item;
        navigate(`/details/${id}`);
    };

    return (
        <div>
            <h1>Home</h1>
            <List items={users} onItemClick={handleClick} />
        </div>
    );
};

export default Home;