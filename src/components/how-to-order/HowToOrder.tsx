import AppContainer from "../container/Container";

import { BsFillPencilFill } from 'react-icons/bs';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { BsFillSendFill } from 'react-icons/bs';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';

import './howToOrder.scss';

const HowToOrder: React.FC = () => {
    return (
        <section className="how_to_order__section">
            <AppContainer>
                <hr className="how_to_order__section-hr" />
                <h2>ЯК ЗАМОВИТИ <span>ELEON-SK</span> ?</h2>
                <article className="how_to_order__section-cards_container">
                    <div className="how_to_order__section-card">
                        <BsFillPencilFill className="how_to_order__section-card-icon" />
                        <p className="how_to_order__section-card_title">Заявка</p>
                        <p className="how_to_order__section-card_description">Залишаєте заявку на сайті</p>
                    </div>
                    <div className="how_to_order__section-card">
                        <BsTelephoneInboundFill className="how_to_order__section-card-icon" />
                        <p className="how_to_order__section-card_title">Дзвінок</p>
                        <p className="how_to_order__section-card_description">Наш менеджер телефонує та уточнює деталі замовлення</p>
                    </div>
                    <div className="how_to_order__section-card">
                        <BsFillSendFill className="how_to_order__section-card-icon" />
                        <p className="how_to_order__section-card_title">Відправка</p>
                        <p className="how_to_order__section-card_description">Відправляємо, Вам, замовлення протягом 3-5 робочих днів.</p>
                    </div>
                    <div className="how_to_order__section-card">
                        <FaMoneyBillWaveAlt className="how_to_order__section-card-icon" />
                        <p className="how_to_order__section-card_title">Оплата</p>
                        <p className="how_to_order__section-card_description">Сплачуєте замовлення на Новій Пошті</p>
                    </div>
                </article>
            </AppContainer>
        </section>
    );
}

export default HowToOrder;