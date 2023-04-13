import AppContainer from "../container/Container";
import ImageContainer from "../image-container/ImageContainer";

import mosquito from './mosquito.jpg';
import mosquitoBite from './mosquitoBite.jpg';
import room from './room.jpg';
import hand from './hand.jpg';

import './problems.scss';

const Problems: React.FC = () => {
    return (
        <section className="problems__section">
            <AppContainer>
                <h2>ВТОМИЛИСЬ ВІД <span>НАБРИДЛИВИХ КОМАХ</span> У ДОМІ?</h2>
                <div className="problems__section-cards">
                    <div className="problems__section-card">
                        <ImageContainer
                            image={mosquito}
                            className="problems__section-image_container"
                        />

                        <p>Дратують <span>комари</span> ?</p>
                    </div>
                    <div className="problems__section-card">
                        <ImageContainer
                            image={mosquitoBite}
                            className="problems__section-image_container"
                        />
                        <p>Потерпаєте від <span>укусів</span> ?</p>
                    </div>
                    <div className="problems__section-card">
                        <ImageContainer
                            image={room}
                            className="problems__section-image_container"
                        />
                        <p>Змушені <span>зачиняти</span> усі вікна?</p>
                    </div>
                    <div className="problems__section-card">
                        <ImageContainer
                            image={hand}
                            className="problems__section-image_container"
                        />
                        <p>Звичайні засоби <span>не допомагають</span> ?</p>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}

export default Problems;