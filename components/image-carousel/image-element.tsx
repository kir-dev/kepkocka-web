export default function ImageElement({
  onClick,
  item,
  active,
}: {
  onClick: () => void;
  item: any;
  active: boolean;
}) {
  return (
    <button onClick={onClick}>
      <div
        className={`inline-block m-6 w-64 pr-11 pl-2 border-l-2 cursor-pointer align-top text-left overflow-hidden hover:h-16 hover:mt-5 transition-all text-sm text-white ${
          active ? "mt-5 h-16" : "mt-10  h-6"
        }`}
      >
        <p>
          <span className="text-xl w-full text-center uppercase block">
            {item.name}
          </span>
          {item.subtitle}
          <br />
          {item.year}
        </p>
      </div>
    </button>
  );
}
