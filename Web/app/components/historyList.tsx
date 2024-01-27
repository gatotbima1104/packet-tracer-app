import CardHistory from "./cardHistory";

interface HistoryListProps {
  history: string[];
  onCardClick: (historyItem: string) => void;
  onDeleteClick: (historyItem: string) => void;
}

const HistoryList: React.FC<HistoryListProps> = ({
  history,
  onCardClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex flex-wrap gap-1 text-center mx-[26rem]">
      {history.map((historyItem) => (
        <CardHistory
          key={historyItem}
          historyItem={historyItem}
          onClick={() => onCardClick(historyItem)}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default HistoryList;
