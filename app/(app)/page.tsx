import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import EmblaCarousel from "@/components/image-carousel/image-carousel";
import { getPayload } from "payload";
import config from "@payload-config";
import Section from "@/components/Section";
import ParallaxBlock from "@/components/ParallaxBlock/ParallaxBlock";
import DividedText from "@/components/DividedText";
import Videos from "@/components/Videos";
import Albums from "@/components/albums-section/albums";

export default async function Home() {
  const payload = await getPayload({
    config,
  });
  const carouselItems = await payload.find({
    collection: "carousel-image",
  });
  const videosDisplay = await payload.find({
    collection: "video",
    limit: 3,
  });
  /*const albums = await payload.find({
      collection: "album"
  })*/

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
      <Section>
        <DividedText>
          <div className="flex-1 halfblock ">
            <img
              className="w-[200px] mx-auto align-middle inline-block"
              src="/kklogo-400.png"
              alt="logo"
            />
          </div>
          <div className="flex-1 halfblock text w-[45%] text-justify">
            <p className="text">
              A fotó- és filmkészítés, mint az építészet határterületei
              megkerülhetetlen kiegészítői szakmánk gyakorlásának. Ezt szem
              előtt tartva alakult meg a Képkocka, a BME Építészmérnöki Kar
              médiával foglalkozó öntevékeny köre. 2010 óta foglalkozunk a kari
              események dokumentálásával, szakmai kép- és videóanyagok
              készítésével, és az érdeklődő hallgatók oktatásával. Folyamatosan
              törekszünk arra, hogy tudásunk fejlesztésével és eszközparkunk
              bővítésével a lehető legjobb minőségű alkotásokat készítsük el.
            </p>
          </div>
        </DividedText>
      </Section>
      <ParallaxBlock bgSrc={"img/fotok.jpg"} >
        <DividedText>
          <div className="flex-1" />
          <div className="flex-1 halfblock">
            <div className="text">
              <span className="title">FOTÓZÁS</span>
              Karunk sokrétű szakmai és közösségi élete számos lehetőséget kínál
              az eseményfotózással ismerkedő tagjaink számára: pár órás
              workshopoktól kezdve a Kari Napokig, kiállításmegnyitóktól a
              Gólyabálig változatos helyzetekben örökítjük meg a közélet
              pillanatait. Örömmel vállalunk nagyobb volumenű projekteket is,
              legutóbb a Középülettervezési Tanszék 70 éves fennállásának
              évfordulójára rendezett kiállításon 30 fotónkat tekinthették meg a
              Műcsarnokban.
            </div>
          </div>
        </DividedText>
      </ParallaxBlock>
      <Section>
        <Albums albums={albumItems.docs} />
      </Section>
      <ParallaxBlock bgSrc="img/videok.jpg" floatRight >
        <DividedText>
          <div className="flex-1 halfblock">
            <div className="text text-white">
              <span className="title">Videózás</span>
              Videók készítésekor mindig a történetet helyezzük előtérbe, és
              törekszünk a minél valósághűbb ábrázolásmódra. Ezeket az elveket
              követtük szociális építőtáborokról készült dokumentumfilmeinknél:
              a perbáli gyermekotthonban tartott építőtáborról, illetve a monori
              Tabán-telepen épült biobrikettszárítóról forgatott videók esetén
              is.
            </div>
          </div>
          <div className="flex-1" />
        </DividedText>
      </ParallaxBlock>
      <Section>
        <Videos videos={videosDisplay.docs} />
      </Section>
      <ParallaxBlock bgSrc="img/kontakt.jpg" floatRight >
        <DividedText>
          <div className="flex-1 halfblock">
            <Footer />
          </div>
          <div className="flex-1" />
        </DividedText>
      </ParallaxBlock>
    </div>
  );
}
