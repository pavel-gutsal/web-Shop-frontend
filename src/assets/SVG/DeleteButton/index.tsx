import './DeleteButton.styles.css';

interface Props {
  onClick: () => void;
}

export const DeleteButton = ({ onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="DeleteButton">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path d="m9.4 16.15 2.6-2.6 2.6 2.6 1.05-1.05-2.6-2.6 2.6-2.6-1.05-1.05-2.6 2.6-2.6-2.6L8.35 9.9l2.6 2.6-2.6 2.6ZM7.3 20.5q-.75 0-1.275-.525Q5.5 19.45 5.5 18.7V6h-1V4.5H9v-.875h6V4.5h4.5V6h-1v12.7q0 .75-.525 1.275-.525.525-1.275.525ZM17 6H7v12.7q0 .1.1.2t.2.1h9.4q.1 0 .2-.1t.1-.2ZM7 6V19v-.3Z" />
      </svg>
    </button>
  );
};
