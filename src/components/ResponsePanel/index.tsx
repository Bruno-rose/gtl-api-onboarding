import React from "react";
import { styles } from "./styles";

interface ResponsePanelProps {
  response: string;
}

const ResponsePanel: React.FC<ResponsePanelProps> = ({ response }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Response</h2>

      {response ? (
        <div className={styles.response.wrapper}>
          <pre className={styles.response.content}>{response}</pre>
        </div>
      ) : (
        <div className={styles.empty.wrapper}>
          <svg
            className={styles.empty.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className={styles.empty.title}>No response yet</p>
          <p className={styles.empty.description}>
            Submit a query to see the response here
          </p>
        </div>
      )}
    </div>
  );
};

export default ResponsePanel;
