// import ReactImageMagnify from "react-image-magnify";
// import watchImg300 from "../assets/front-small.jpg"
// import watchImg1200 from "../assets/front-large.jpg"

// const ImageZoom = () => {
//   return (
//     <div style={{ width: "100%" ,height: "30%"}}>
//       <ReactImageMagnify {...{
//         smallImage: {
//           alt: 'Wristwatch by Ted Baker London',
//           isFluidWidth: true,
//           src: watchImg300,
//           sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
//         },
//         largeImage: {
//           src: watchImg1200,
//           width: 1425,
//           height: 2000,
          
//         }, enlargedImageContainerDimensions: {
//             width: '200%',
//             height: '100%'
//         }
//       }} />
//     </div>
//   );
// };

// export default ImageZoom;

import ReactImageMagnify from "react-image-magnify";

const ImageZoom = ({ imageUrl }) => {
  return (
    <div style={{ width: "100%", height: "30%" }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: imageUrl, // Set the small image source to the selected imageUrl
            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
          },
          largeImage: {
            src: imageUrl, // Set the large image source to the selected imageUrl
            width: 1425,
            height: 2000,
          },
          enlargedImageContainerDimensions: {
            width: '200%',
            height: '100%'
          }
        }}
      />
    </div>
  );
};

export default ImageZoom;
