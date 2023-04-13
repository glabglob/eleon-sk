import { BsShieldFillCheck, BsFillLightbulbOffFill, BsGeoAltFill } from 'react-icons/bs';

import AppContainer from "../container/Container";
import Timer from '../timer/Timer';

import './proposal.scss';

const Proposal: React.FC = () => {
    return (
        <section className="proposal__section">
            <AppContainer>
                <article className="proposal__advantages">
                    <div className="proposal__advantages-card">
                        <div className="proposal__advantages-icon_container">
                            <BsShieldFillCheck
                                color='#ff0000'
                                className='icon'
                            />
                        </div>
                        <span>Безпечна для дітей і тварин</span>
                    </div>
                    <div className="proposal__advantages-card">
                        <div className="proposal__advantages-icon_container">
                            <BsFillLightbulbOffFill
                                color='#ff0000'
                                className='icon'
                            />
                        </div>
                        <span>Економічна</span>
                    </div>
                    <div className="proposal__advantages-card">
                        <div className="proposal__advantages-icon_container">
                            <BsGeoAltFill
                                color='#ff0000'
                                className='icon'
                            />
                        </div>
                        <span>Ефективна вдома і на вулиці</span>
                    </div>
                </article>
                <hr className='proposal__section-hr' />
                <h2>ПРОПОЗИЦІЯ ДІЄ:</h2>
                <Timer />
                <a href="#form"><button className='proposal__section-button'>ЗАМОВИТИ В 1 КЛIК</button></a>
                <h3>ЗАЛИШИЛОСЬ <span>7</span> ШТУК !</h3>
            </AppContainer>
        </section>
    );
}

export default Proposal;