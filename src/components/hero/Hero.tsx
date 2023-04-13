import AppContainer from "../container/Container";
import ImageContainer from "../image-container/ImageContainer";

import heroImg from './sideBox.png';
import tears from './tears.svg';

import './hero.scss';

const Hero: React.FC = () => {
    return (
        <section className="hero__section">
            <AppContainer>
                <article className="hero__section-content">
                    <div className="hero__section-description">
                        <img
                            src={tears}
                            className="hero__section-tears"
                        />
                        <h1>ELEON-SK</h1>
                        <span>ЗНИЩУВАЧ КОМАХ</span>
                        <span>ПОЗБАВТЕСЬ КОМАХ НАЗАВЖДИ!</span>
                    </div>
                    <ImageContainer
                        image={heroImg}
                        className="hero__section-img"
                    />
                </article>
            </AppContainer>
        </section>
    );
}

export default Hero;