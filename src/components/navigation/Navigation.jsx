import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/home/Home.jsx';
import Error from '../../pages/error/Error.jsx';
import Details from '../../pages/details/Details.jsx';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Error />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;