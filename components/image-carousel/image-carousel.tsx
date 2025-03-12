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
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {dummyItems.map((item) => (
            <img
              key={item.name}
              className="embla__slide w-lvw h-lvh object-cover"
              src={item.image}
            />
          ))}
        </div>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute rounded-full left-12 top-1/2 -translate-y-1/2"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute rounded-full right-12 top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="absolute w-full h-24 bottom-0 left-0 pl-10 box-border overflow-hidden">
        {scrollSnaps.map((_, index) => (
          <ImageElement
            key={index}
            item={dummyItems[index]}
            onClick={() => onDotButtonClick(index)}
            active={index === selectedIndex}
          />
        ))}
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
    image: "/img/logo.png",
    year: 2014,
  },
];
