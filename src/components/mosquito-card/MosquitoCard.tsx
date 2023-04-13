import './mosquitoCard.scss';

interface MosquitoCardProps {
    image: string
    description: string
}

const MosquitoCard: React.FC<MosquitoCardProps> = (props: MosquitoCardProps) => {
    return (
        <div className="mosquito__card">
            <div className="mosquito__card-img_container">
                <img src={props.image} />
            </div>
            <span>{props.description}</span>
        </div>
    );
}

export default MosquitoCard;