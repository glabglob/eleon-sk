import './imageContainer.scss';

interface ImageContainerProps {
    image: string
    className?: string
}

const ImageContainer: React.FC<ImageContainerProps> = (props: ImageContainerProps) => {

    const { image, className } = props;

    return (
        <div className={`image__container ${className}`}>
            <img src={image} alt="" className='image' />
        </div>
    );
}

export default ImageContainer;