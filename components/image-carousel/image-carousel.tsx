"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "./projectLine";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import ImageElement from "./image-element";
import "./embla.css";
import { CarouselImage } from "@/payload-types";
import { getImageUrl } from "@/lib/utils";

type PropType = {
  options?: EmblaOptionsType;
  items: CarouselImage[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, items } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoPlay({ playOnInit: true, delay: 4000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <section className="embla relative" id="nyito-holder">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item) => (
            <img
              key={item.createdAt}
              className="translate-x-0 translate-y-0 min-w-0 pl-4 w-lvw h-lvh object-cover flex-[0_0_100%]"
              src={getImageUrl(item.picture)}
              alt={item.subtitle || ""}
            />
          ))}
        </div>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute rounded-full left-12 top-1/2 -translate-y-1/2 z-30 text-white"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute rounded-full right-12 top-1/2 -translate-y-1/2 z-30 text-white"
        />
      </div>

      <div className="absolute w-full h-24 bottom-0 left-0 pl-10 box-border overflow-hidden z-30">
        {scrollSnaps.map((_, index) => (
          <ImageElement
            key={index}
            item={items[index]}
            onClick={() => onDotButtonClick(index)}
            active={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
