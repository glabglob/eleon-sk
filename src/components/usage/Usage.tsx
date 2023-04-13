import AppContainer from '../container/Container';
import ImageContainer from '../image-container/ImageContainer';

import sideBlue from './sideBlue.png';

import './usage.scss';

const Usage: React.FC = () => {
    return (
        <section className='usage__section'>
            <AppContainer>
                <article className="usage__section-content">
                    <ImageContainer
                        image={sideBlue}
                        className='usage__section-img'
                    />
                    <p>УВІМКНІТЬ  <br /> <span>ELEON-SK</span> <br /> ТА СПІТЬ СПОКІЙНО</p>
                </article>
            </AppContainer>
        </section>
    );
}

export default Usage;