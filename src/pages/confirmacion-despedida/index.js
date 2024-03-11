import { FaLocationArrow, FaClock, FaCalendar } from "react-icons/fa";
const Confirmation = ({sala, hora, fecha, equipo}) => {
    return (
        <div>
            <h1>¡Todo listo!</h1>
            <p>Estamos preparando todo para tu llegada</p>
            <div style={{display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 20 }}>
                    <div><FaLocationArrow/> </div>
                    <div style={{padding:2}}><p>{sala}</p></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 20 }}>
                    <div><FaClock/> </div>
                    <div style={{padding:2}}><p>{hora}</p></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 20 }}>
                    <div><FaCalendar/> </div>
                    <div style={{padding:2}}><p>{fecha}</p></div>
                </div>
            </div>
            <h2>Equipo solicitado</h2>
            <ul>
                {equipo.map((item)=>(
                    <li key={item}>{item.cantidad} {item.item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Confirmation;
