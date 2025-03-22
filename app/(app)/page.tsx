import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import EmblaCarousel from "@/components/image-carousel/image-carousel";
import { getPayload } from "payload";
import config from "@payload-config";
import Section from "@/components/Section";
import ParallaxBlock from "@/components/ParallaxBlock/ParallaxBlock";
import DividedText from "@/components/DividedText";

export default async function Home() {
  const payload = await getPayload({
    config,
  });
  const carouselItems = await payload.find({
    collection: "carousel-image",
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
                <img className="flex-1" width={200} src={undefined} alt="logo"/>
                <div className="flex-1">A fotó- és filmkészítés, mint az építészet határterületei megkerülhetetlen kiegészítői szakmánk gyakorlásának. Ezt szem előtt tartva alakult meg a Képkocka, a BME Építészmérnöki Kar médiával foglalkozó öntevékeny köre. 2010 óta foglalkozunk a kari események dokumentálásával, szakmai kép- és videóanyagok készítésével, és az érdeklődő hallgatók oktatásával. Folyamatosan törekszünk arra, hogy tudásunk fejlesztésével és eszközparkunk bővítésével a lehető legjobb minőségű alkotásokat készítsük el. </div>
            </DividedText>
        </Section>
        <ParallaxBlock bgSrc={"img/fotok.jpg"} height={200}>
            <DividedText>
                <div className="flex-1" />
                <div className="flex-1">
                    <h3 className="text-center text-2xl mb-14">FOTÓZÁS</h3>
                    <p>Karunk sokrétű szakmai és közösségi élete számos lehetőséget kínál az eseményfotózással ismerkedő tagjaink számára: pár órás workshopoktól kezdve a Kari Napokig, kiállításmegnyitóktól a Gólyabálig változatos helyzetekben örökítjük meg a közélet pillanatait. Örömmel vállalunk nagyobb volumenű projekteket is, legutóbb a Középülettervezési Tanszék 70 éves fennállásának évfordulójára rendezett kiállításon 30 fotónkat tekinthették meg a Műcsarnokban. </p>
                </div>
            </DividedText>
        </ParallaxBlock>
      <Footer />
    </div>
  );
}
