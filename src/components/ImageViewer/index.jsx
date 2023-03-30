import * as React from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const ImageViewer = (props) => {
  const { show, onClose, images, audio, video, imageCaptions } = props;
  const formatImages = (images) => {
    return images.map((photo, index) => {
      return {
        title: imageCaptions[index],
        src: photo,
        key: `${index}`,
        images: photo,
      };
    });
  };
  const formatAudio = (audio) => {
    return audio.map((file, index) => {
      return {
        type: "video",
        sources: [
          {
            src: file,
            type: "video/mp4",
          },
        ],
        key: `${index}`,

        poster: "https://cdn-icons-png.flaticon.com/512/1324/1324071.png",
      };
    });
  };

  const formatVideo = (video) => {
    return video.map((file, index) => {
      return {
        type: "video",
        sources: [
          {
            src: file,
            type: "video/mp4",
          },
        ],
        key: `${index}`,
        poster: "https://cdn-icons-png.flaticon.com/512/1666/1666880.png",
      };
    });
  };
  let fImages = formatImages(images);
  let fVideo = formatVideo(video);
  let fAudio = formatAudio(audio);
  let allMedia = [...fImages, ...fVideo, ...fAudio];
  return (
    <Lightbox
      open={show}
      close={() => onClose()}
      slides={allMedia}
      plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
    />
  );
};

export default ImageViewer;
