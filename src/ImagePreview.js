import { useState, useEffect } from 'react';

function ImagePreview(props) {
    const [images, setImages] = useState(() => []);
    const [selectedImageIndex, setSelectedImageIndex] = useState(() => 0);

    useEffect(() => {
        setImages(props.images);
    }, [props.images]);

    const renderSelectedImage = (
        <div style={{ width: 500, height: 300 }} >
            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={images[selectedImageIndex]} />
        </div>
    );

    const renderPreviewImages = () => {
        return images.map((image, index) => {
            return <div style={{ padding: '10px 0', width: 100, height: 100 }} onClick={() => setSelectedImageIndex(index)}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={image} />
            </div>
        });
    };

    return (
        <div>
            <div style={{ float: 'left' }}>
                {renderSelectedImage}
            </div>
            <div style={{ margin: '-10px 20px', float: 'left' }}>
                {renderPreviewImages()}
            </div>
        </div>
    );
}

export default ImagePreview;