import AppContainer from "../container/Container";
import MosquitoCard from "../mosquito-card/MosquitoCard";
import ImageContainer from "../image-container/ImageContainer";

import anotherSideWhite from './anotherSideWhite.png';

import mosquito from './mosquito.png'
import fly from './fly.png'
import mole from './mole.png'

import './surfaceInfo.scss';

const SurfaceInfo: React.FC = () => {
    return (
        <section className="surface__info-section">
            <AppContainer>
                <article className="surface__info-content">
                    <ImageContainer
                        image={anotherSideWhite}
                        className="surface__info-img"
                    />
                    <div className="surface__info-cards">
                        <MosquitoCard
                            image={mosquito}
                            description="НІ КОМАРАМ!"
                        />
                        <MosquitoCard
                            image={fly}
                            description="НІ МУХАМ!"
                        />
                        <MosquitoCard
                            image={mole}
                            description="НІ МОЛІ!"
                        />
                    </div>
                </article>
            </AppContainer>
        </section>
    );
}

export default SurfaceInfo;