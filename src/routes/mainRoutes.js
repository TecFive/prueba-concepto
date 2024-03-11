import Layout from '../layout';
import Reservation from '../pages/reservation';


const MainRoutes = {
    path: '/',
    element: (
        <Layout />
    ),
    children: [
        {
            path: '/',
            element: <Reservation />
        }
    ]
};

export default MainRoutes;
