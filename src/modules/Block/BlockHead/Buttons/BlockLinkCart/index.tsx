import '../BlockLinkPhones';
import './BlockLinkCart.styles.css';

interface Props {
  onClick: () => void;
}

export const BlockLinkCart = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className="BlockLinkItem BlockLinkLaptopButton"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path d="M7.15 21.55q-.725 0-1.237-.512Q5.4 20.525 5.4 19.8t.513-1.238q.512-.512 1.237-.512.725 0 1.237.512.513.513.513 1.238t-.513 1.238q-.512.512-1.237.512Zm9.7 0q-.725 0-1.237-.512-.513-.513-.513-1.238t.513-1.238q.512-.512 1.237-.512.725 0 1.237.512.513.513.513 1.238t-.513 1.238q-.512.512-1.237.512ZM6.025 5.75l2.525 5.3h6.825q.075 0 .15-.038.075-.037.1-.112l2.7-4.875q.05-.1 0-.187-.05-.088-.15-.088ZM5.3 4.25h13.875q.625 0 .938.525.312.525.037 1.075l-3.225 5.8q-.225.425-.637.662-.413.238-.888.238H8.1l-1.15 2.125q-.075.125-.012.25.062.125.212.125H18.6v1.5H7.15q-1 0-1.5-.862-.5-.863-.025-1.713L7.05 11.4 3.4 3.75H1.5v-1.5h2.85Zm3.25 6.8h7Z" />
      </svg>
      cart
    </button>
  );
};
