import { CarouselItem } from "../ui/carousel";
import { CarouselElement } from "./image-carousel";

export default function ImageElement({ item }: { item: CarouselElement }) {
  return (
    <CarouselItem
      className="bg-[url(/img/monor.jpg)]"
      kk-label="monor"
      kk-carousel="nyito-background"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <p>
        <span className="title">{item.name}</span>
        <br />
        {item.subtitle}
        <br />
        {item.year}
      </p>
    </CarouselItem>
  );
}
