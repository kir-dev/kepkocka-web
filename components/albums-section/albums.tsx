"use client";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Lightbox from "yet-another-react-lightbox";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../image-carousel/EmblaCarouselArrowButtons";
import { Album } from "@/payload-types";
import { getImageUrl } from "@/lib/utils";
import NextJsImage from "./next-js-image";

type PropType = {
  albums: Album[];
};

const Albums: React.FC<PropType> = (props) => {
  const { albums } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });

  const [index, setIndex] = useState(-1);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla2 relative holder py-28">
      <div className="embla__viewport pl-7" ref={emblaRef}>
        <div className="embla__container">
          {albums.map(
            (album) =>
              album.pictures && (
                <div
                  className="embla__slide galeria kk-gallery p-7"
                  key={album.id}
                >
                  <img
                    key={album.id}
                    className="object-cover"
                    src={getImageUrl(album.pictures[0].image)}
                    alt={album.name || ""}
                    onClick={() => {
                      setIndex(albums.indexOf(album));
                    }}
                  />
                  <p>{album.name}</p>
                </div>
              )
          )}
        </div>
      </div>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute rounded-full -left-12 top-1/2 -translate-y-1/2 z-30 text-black"
      />
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="absolute rounded-full -right-12 top-1/2 -translate-y-1/2 z-30 text-black"
      />
      <Lightbox
        open={index > -1}
        close={() => setIndex(-1)}
        slides={
          index > -1
            ? albums[index].pictures?.map((picture) => ({
                src: getImageUrl(picture.image),
              }))
            : []
        }
        render={{ slide: NextJsImage }}
      />
    </section>
  );
};

export default Albums;
