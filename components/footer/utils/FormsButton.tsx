interface FormsButtonProps {
  text: string;
  link: string;
}

export default function FormsButton({ text, link }: FormsButtonProps) {
  return (
    <a
      className="border-2 border-solid rounded-full p-2 hover:bg-white hover:text-black transition duration-300 ease-in-out hover:cursor-pointer border-white"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
}
