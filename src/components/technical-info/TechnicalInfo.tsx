import AppContainer from "../container/Container";

import './technicalInfo.scss';

const TechnicalInfo: React.FC = () => {
    return (
        <section className="technical__section" id="technicalInfo">
            <AppContainer>
                <hr className="technical__section-hr" />
                <h2>ТЕХНІЧНІ ХАРАКТЕРИСТИКИ<br /><span>ЛАМПИ-ВИНИЩУВАЧА ELEON-SK</span></h2>
                <ul className="technical__section-list">
                    <li className="technical__section-list_item">Виробник: <span>Польша</span></li>
                    <li className="technical__section-list_item">Площа дії: <span>250 кв.м.</span></li>
                    <li className="technical__section-list_item">Призначення: <span>Від комах, що літають.</span></li>
                    <li className="technical__section-list_item">Розмір(довжина, ширина, висота): <span>670мм/120мм/330мм</span></li>
                    <li className="technical__section-list_item">Вага: <span>4500г</span></li>
                    <li className="technical__section-list_item">Споживана потужність: <span>43/63 Вт.</span></li>
                    <li className="technical__section-list_item">Кількість ламп: <span>3</span></li>
                </ul>
            </AppContainer>
        </section>
    );
}

export default TechnicalInfo;