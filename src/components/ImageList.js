import React from 'react';

const ImageList = (props) => {
    const { images } = props;

    images.map((image) => {
        return (
            <img src={image.links.html} alt=""/>
        )
    });

    return <div>Images </div>;
};

export default ImageList;
