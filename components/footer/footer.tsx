import FormsButton from "./utils/FormsButton";
import SocialMediaLink from "./utils/SocialMediaLink";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text">
      <div className="text-white p-4 flex flex-col items-center text-center gap-4">
        <span className="title">Kontakt</span>
        <p>Ha szerednéd felkérni a Képkockát egy megbízásra</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormsButton
            text="Képkocka felkérés"
            link="https://forms.gle/mHA3Dc3M1qSnRmEK6"
          />
        </div>
        <a href="MAILTO:kepkocka@uni.bme.hu">kepkocka@uni.bme.hu</a>
        <a href="https://www.facebook.com/Kepkocka">facebook.com/Kepkocka</a>
        <p>1117 Budapest, Bercsényi u. 28-30.</p>
        <div className="flex gap-4">
          <SocialMediaLink
            link="https://www.youtube.com/channel/UCwjaZcTFkJHtUNU8qAHEX9w"
            imgSrc="YoutubeLogo.png"
            altText="Youtube logo"
          />
          <SocialMediaLink
            link="https://www.facebook.com/KepKocka"
            imgSrc="FacebookLogo.png"
            altText="Facebook logo"
          />
          <SocialMediaLink
            link="https://www.instagram.com/kepkocka"
            imgSrc="InstagramLogo.png"
            altText="Instagram logo"
          />
        </div>
        <p>Made with love by: Kir-Dev - 2025</p>
      </div>
    </div>
  );
}
