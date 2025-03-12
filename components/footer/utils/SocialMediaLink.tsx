import Image from "next/image";

interface SocialMediaLinkProps {
  link: string;
  imgSrc: string;
  altText: string;
}

export default function SocialMediaLink({
  link,
  imgSrc,
  altText,
}: SocialMediaLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="opacity-100 hover:opacity-70 transition duration-300 ease-in-out"
    >
      <Image
        src={`/img/social-media/${imgSrc}`}
        width={64}
        height={64}
        alt={altText}
      />
    </a>
  );
}
