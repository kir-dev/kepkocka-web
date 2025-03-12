import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import ImageElement from "./image-element";

export default function ImageCarousel() {
  return (
    <Carousel className="w-dvw h-dvh bg-gray-600">
      <CarouselContent>
        {dummyItems.map((item) => (
          <ImageElement key={item.name} item={item} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
const dummyItems: CarouselElement[] = [
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

export type CarouselElement = {
  name: string;
  subtitle: string;
  image: string;
  year: number;
};
