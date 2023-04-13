import AppContainer from '../container/Container';
import Slider from '../slider/Slider';

import review1 from './review1.png';
import review2 from './review2.png';

import user1 from './user1.jpeg'
import user2 from './user2.png'

import './reviews.scss';

const slides = [
    {
        image: review1,
        description: 'На дачі завжди намагаємось зачиняти двері, а на вікнах встановлено антимоскітні сітки, але всеодно до нас постійно навідувались комари. Виподково натрапили на цей сайт в інтернеті та вирішили замовити, все прийшло дуже швидко та щей за акційною пропозицією зекономили купу грошей! Вже встановили, комари навіть бояться підлетіти до нашого будиночка! Дякую!',
        userImage: user2,
        userName: 'Марина Юдіна',
        userLocation: 'Хмельницький'
    },
    {
        image: review2,
        description: 'Працює на чудово! Жоден засіб так ефективно не усував комарів, а перепробував купу! Більшу частину часу знаходжу на дачі, тому для мене засіб виявився просто незамінним! Вночі сяє синім кольором, освітлюючи півкімнати, так би мовити пристрій 2 в 1, вбивця комах і нічник!',
        userImage: user1,
        userName: 'Володимир Афанасьєв',
        userLocation: 'Кропивницький'
    },
];

const Reviews: React.FC = () => {
    return (
        <section className='reviews__section' id='reviews'>
            <AppContainer>
                <p>ВІДГУКИ <span>ПОКУПЦІВ</span></p>
                <Slider
                    slides={slides}
                />
            </AppContainer>
        </section>
    );
}

export default Reviews;