import Layout from '../layout';
import Confirmation from '../pages/confirmacion-despedida';
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
        },
        {
            path: '/reservacion/confirmacion',
            element: <Confirmation sala={"Lego Room"} hora={"08:00"} fecha={"20/03/2023"} equipo={[{item: "Apple Vision Pro", cantidad:1},{item: "Computadoras Windows", cantidad:4,},{item: "iMacs", cantidad:2},{item: "Sillas", cantidad:6},{item: "Mesas", cantidad:2}]} />
        }
    ]
};

export default MainRoutes;
