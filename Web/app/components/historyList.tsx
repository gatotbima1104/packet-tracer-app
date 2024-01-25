import CardHistory from "./cardHistory";

interface HistoryListProps {
  history: string[];
  onCardClick: (historyItem: string) => void;
}

const HistoryList: React.FC<HistoryListProps> = ({ history, onCardClick }) => {
  return (
    <div className="flex flex-wrap gap-1 text-center mx-[26rem]">
      {history.map((historyItem) => (
        <CardHistory
          key={historyItem}
          historyItem={historyItem}
          onClick={() => onCardClick(historyItem)}
        />
      ))}
    </div>
  );
};

export default HistoryList;
