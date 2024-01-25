interface CardHistoryProps {
  historyItem: string;
  onClick: () => void;
}

const CardHistory: React.FC<CardHistoryProps> = ({ historyItem, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-xl p-2 cursor-pointer text-center hover:bg-blue-500 m-2"
    >
      {historyItem}
    </div>
  );
};

export default CardHistory;
