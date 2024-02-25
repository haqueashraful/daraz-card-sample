

import ReactImageMagnify from "react-image-magnify";

const ImageZoom = ({ imageUrl }) => {
  return (
    <div style={{ width: "100%", height: "30%" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: imageUrl, 
            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
          },
          largeImage: {
            src: imageUrl, 
            width: 1425,
            height: 2000,
          },
          enlargedImageContainerDimensions: {
            width: '150%',
            height: '100%'
          }
        }}
      />
    </div>
  );
};

export default ImageZoom;
