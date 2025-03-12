"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./projectLine";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ImageElement from "./image-element";
import "./embla.css";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {dummyItems.map((item) => (
            <ImageElement key={item.name} item={item} />
          ))}
        </div>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute  h-8 w-8 rounded-full left-12 top-1/2 -translate-y-1/2"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute  h-8 w-8 rounded-full right-12 top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
const dummyItems = [
  {
    name: "BioBrikett szárító",
    subtitle: "dokumentumfilm",
    image: "/img/monor.jpg",
    year: 2015,
  },
  {
    name: "XXL lakófilm",
    subtitle: "interjúsorozat",
    image: "/images/xxl.jpg",
    year: 2014,
  },
];
