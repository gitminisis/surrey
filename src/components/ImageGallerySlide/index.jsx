import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ImageViewer from "../ImageViewer";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ImageGallerySlide = (props) => {
  const { images } = props;
  let data = images.map((e) => {
    return {
      original: e,
      thumbnail: e,
    };
  });
  const [show, setShow] = useState(false);
  return (
    <>
      <ImageGallery
        useBrowserFullscreen={false}
        showPlayButton={false}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-fullscreen-button"
            onClick={(_) => setShow(true)}
            aria-label="Open Fullscreen"
          >
            <FullscreenIcon style={{ fontSize: "2rem" }} />
          </button>
        )}
        renderLeftNav={(onClick, disabled) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
          >
            <ArrowBackIosIcon />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
          >
            <ArrowForwardIosIcon />
          </button>
        )}
        onScreenChange={(e, fn) => {
          console.log(show);
          setShow(e);
        }}
        items={data}
        onClick={(e) => {
          console.log(e);
          setShow(true);
        }}
      />
      <ImageViewer data={images} show={show} onClose={(_) => setShow(false)} />
    </>
  );
};

export default ImageGallerySlide;
