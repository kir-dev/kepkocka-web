export default function ImageElement({ item }: { item: any }) {
  return (
    <div
      className="w-dvw h-dvh bg-cover"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div className="inline-block m-6 w-64 pr-11 pl-2 border-l-2 cursor-pointer align-top text-left h-5 mt-10 overflow-hidden transition-all">
        <p>
          <span className="title">{item.name}</span>
          <br />
          {item.subtitle}
          <br />
          {item.year}
        </p>
      </div>
    </div>
  );
}
