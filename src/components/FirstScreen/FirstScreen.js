import { NavLink } from 'react-router-dom';
import './FirstScreen.scss';

export const FirstScreen = () => {
    return (
        <div className="div">        
        <nav className="first-screen__nav">
            <ul className="l-first-screen">
                <li className="l-first-screen__item">
                    <NavLink to="/second">
                        Найти специалиста
                    </NavLink>
                </li>
                <li className="l-first-screen__item">
                    <NavLink to="/first">
                        Вход для специалистов
                    </NavLink>
                </li>
            </ul>


                
        </nav>
        </div>

    )
}