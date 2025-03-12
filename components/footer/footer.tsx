import FormsButton from "./utils/FormsButton";
import SocialMediaLink from "./utils/SocialMediaLink";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-gray-800 text-white p-4 flex flex-col items-center text-center gap-4">
        <h3>Kontakt</h3>
        <p>
          Ha szerednéd felkérni a Képkockát egy megbízásra, használd az egyik
          gombot:
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <FormsButton
            text="Videós projekt"
            link="https://docs.google.com/forms/d/e/1FAIpQLSe_NLBTqX1lGTYSK_H37MT6Lz7rvIVd_xmtd1aKrj8UZtFVjw/viewform"
          />
          <FormsButton
            text="Fotós projekt"
            link="https://docs.google.com/forms/d/e/1FAIpQLScnTKyOSX_43c6RShFCdd9YVmkbOhrVn6n3Rurq342Zz-JfNQ/viewform"
          />
        </div>
        <p>kepkocka@epiteszhk.bme.hu</p>
        <p>facebook.com/Kepkocka</p>
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
