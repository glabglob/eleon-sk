import AppContainer from "../container/Container";

import sideWhite from './sideWhite.png';

import './price.scss';
import ImageContainer from "../image-container/ImageContainer";

const Price: React.FC = () => {
    return (
        <section className="price__section" id="price">
            <AppContainer>
                <article className="price__section-content">
                    <div className="price__section-price">
                        <span>ЗВИЧАЙНА ЦІНА: <br /> <p className="old__price">3920 грн.</p></span>
                        <span>ЦІНА СЬОГОДНІ: <br /> <p>1960 грн.</p></span>
                    </div>
                    <div className="price__section-img">
                        <ImageContainer
                            image={sideWhite}
                            className="price__section-img"
                        />
                        <div className="price__section-sale">ЗНИЖКА</div>
                    </div>
                </article>
            </AppContainer>
        </section>
    );
}

export default Price;