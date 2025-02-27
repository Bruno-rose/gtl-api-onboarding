import React, { useState } from "react";
import { ChevronDown, ChevronUp, Database, Code, Search } from "lucide-react";
import { HistoryItem, Endpoint } from "../../types";
import { styles } from "./styles";

interface HistoryPanelProps {
  history: HistoryItem[];
  onItemClick: (item: HistoryItem) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history,
  onItemClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const getIcon = (endpoint: Endpoint) => {
    switch (endpoint) {
      case "repositories":
        return <Database className={styles.content.item.content.icon} />;
      case "query":
        return <Code className={styles.content.item.content.icon} />;
      case "search":
        return <Search className={styles.content.item.content.icon} />;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.header.wrapper}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.header.title.wrapper}>
          <span className={styles.header.title.text}>History</span>
          <span className={styles.header.title.count}>{history.length}</span>
        </div>
        <button className={styles.header.button}>
          {isExpanded ? (
            <ChevronUp className={styles.header.icon} />
          ) : (
            <ChevronDown className={styles.header.icon} />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className={styles.content.wrapper}>
          {history.length === 0 ? (
            <div className={styles.content.empty}>No history yet</div>
          ) : (
            <div className={styles.content.list}>
              {history.map((item, index) => (
                <div
                  key={index}
                  className={styles.content.item.wrapper}
                  onClick={() => onItemClick(item)}
                >
                  <div className={styles.content.item.content.wrapper}>
                    <div className={styles.content.item.content.iconWrapper}>
                      {getIcon(item.endpoint)}
                    </div>
                    <div className={styles.content.item.content.main.wrapper}>
                      <div
                        className={
                          styles.content.item.content.main.header.wrapper
                        }
                      >
                        <h4
                          className={
                            styles.content.item.content.main.header.title
                          }
                        >
                          {item.endpoint}
                        </h4>
                        <span
                          className={
                            styles.content.item.content.main.header.time
                          }
                        >
                          {item.timestamp.toLocaleString()}
                        </span>
                      </div>
                      <p className={styles.content.item.content.main.details}>
                        {item.response}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryPanel;
