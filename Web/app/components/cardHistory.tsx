import { FaTimes } from "react-icons/fa";

interface CardHistoryProps {
  historyItem: string;
  onClick: () => void;
  onDeleteClick: (historyItem: string) => void;
}

const CardHistory: React.FC<CardHistoryProps> = ({
  historyItem,
  onClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex rounded-xl items-center justify-between border p-2 space-x-3 hover:bg-blue-500">
      <div onClick={onClick} className="cursor-pointer text-center">
        {historyItem}
      </div>
      <div
        onClick={() => onDeleteClick(historyItem)}
        className="cursor-pointer p-1 hover:bg-red-500 rounded-xl"
      >
        <FaTimes />
      </div>
    </div>
  );
};

export default CardHistory;
