"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../image-carousel/EmblaCarouselArrowButtons";
import { Album } from "@/payload-types";
import { getImageUrl } from "@/lib/utils";

type PropType = {
  albums: Album[];
  options?: EmblaOptionsType;
};

const Albums: React.FC<PropType> = (props) => {
  const { albums, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla2 relative holder py-28">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {albums.map(
            (album) =>
              album.pictures && (
                <div className="embla__slide" key={album.id}>
                  <img
                    key={album.id}
                    className="object-cover"
                    src={getImageUrl(album.pictures[0].image)}
                    alt={album.name || ""}
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
    </section>
  );
};

export default Albums;
