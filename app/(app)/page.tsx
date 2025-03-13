import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import EmblaCarousel from "@/components/image-carousel/image-carousel";
import { getPayload } from "payload";
import config from "@payload-config";
import Albums from "@/components/albums-section/albums";

export default async function Home() {
  const payload = await getPayload({
    config,
  });
  const carouselItems = await payload.find({
    collection: "carousel-image",
  });
  const albumItems = await payload.find({
    collection: "album",
  });
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 opacity-60 w-dvw h-dvh z-10 bg-repeat"
        style={{ backgroundImage: "url(/overlay-pattern.png)" }}
      />
      <Header />
      <EmblaCarousel items={carouselItems.docs} />
      <Albums albums={albumItems.docs} />
      <Footer />
    </div>
  );
}
