import React, { useEffect } from "react";
import { FaLocationArrow, FaClock, FaCalendar } from "react-icons/fa";
import { useSpeechSynthesis } from 'react-speech-kit';

const Confirmation = ({ sala, hora, fecha, equipo } ) => {
    const onEnd = () =>{
        speak({text:""})
    }
    const { speak, voices,cancel } = useSpeechSynthesis({onEnd});
    const spanishVoice = voices.find(voice => voice.lang === 'es-ES');

    useEffect(() => {
        speak({ text: "¡Todo listo! Estamos preparando todo para tu llegada, Recibirás una confirmación en tu correo electrónico institucional en el caso de cualquier movimiento relacionado con tu reservación" , voice: spanishVoice,});
    }, []);

    return (
        <div>
            <h1>¡Todo listo!</h1>
            <p>Estamos preparando todo para tu llegada</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 20 }}>
                    <div><FaLocationArrow /> </div>
                    <div style={{ padding: 2 }}><p>{sala}</p></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 20 }}>
                    <div><FaClock /> </div>
                    <div style={{ padding: 2 }}><p>{hora}</p></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 20 }}>
                    <div><FaCalendar /> </div>
                    <div style={{ padding: 2 }}><p>{fecha}</p></div>
                </div>
            </div>
            <h2>Equipo solicitado</h2>
            <ul>
                {equipo.map((item, index) => (
                    <li key={index}>{item.cantidad} {item.item}</li>
                ))}
            </ul>
            <p>Recibirás una confirmación en tu correo electrónico institucional en el caso de cualquier movimiento relacionado con tu reservación</p>
        </div>
    );
};

export default Confirmation;
