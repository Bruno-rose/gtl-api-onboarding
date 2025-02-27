import React from "react";
import {
  CheckCircle,
  Code,
  Database,
  Search,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { styles } from "./styles";

interface CompletionPageProps {
  historyCount: number;
}

const CompletionPage: React.FC<CompletionPageProps> = ({ historyCount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header.wrapper}>
        <div className={styles.header.iconWrapper}>
          <CheckCircle className={styles.header.icon} />
        </div>
        <h1 className={styles.header.title}>Setup Complete!</h1>
        <p className={styles.header.subtitle}>
          You've successfully made {historyCount} API{" "}
          {historyCount === 1 ? "request" : "requests"}
        </p>
      </div>

      <p className={styles.description}>
        You're now ready to start using Greptile's powerful features to analyze
        and understand your codebase.
      </p>

      <div className={styles.nextSteps.container}>
        <h2 className={styles.nextSteps.title}>What's Next?</h2>
        <ul className={styles.nextSteps.list}>
          <li className={styles.nextSteps.item.wrapper}>
            <div className={styles.nextSteps.item.iconWrapper}>
              <Database className={styles.nextSteps.item.icon} />
            </div>
            <div>
              <p className={styles.nextSteps.item.content.title}>
                Index your repositories
              </p>
              <p className={styles.nextSteps.item.content.description}>
                Start by indexing your most important repositories to make them
                searchable.
              </p>
            </div>
          </li>
          <li className={styles.nextSteps.item.wrapper}>
            <div className={styles.nextSteps.item.iconWrapper}>
              <Code className={styles.nextSteps.item.icon} />
            </div>
            <div>
              <p className={styles.nextSteps.item.content.title}>
                Integrate with your tools
              </p>
              <p className={styles.nextSteps.item.content.description}>
                Connect Greptile with Slack, GitHub, or your custom
                applications.
              </p>
            </div>
          </li>
          <li className={styles.nextSteps.item.wrapper}>
            <div className={styles.nextSteps.item.iconWrapper}>
              <Search className={styles.nextSteps.item.icon} />
            </div>
            <div>
              <p className={styles.nextSteps.item.content.title}>
                Explore advanced queries
              </p>
              <p className={styles.nextSteps.item.content.description}>
                Try complex natural language queries to get the most out of your
                codebase.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.resources.container}>
        <h2 className={styles.resources.title}>Helpful Resources</h2>
        <div className={styles.resources.grid}>
          <a href="/docs" className={styles.resources.card.wrapper}>
            <div className={styles.resources.card.container}>
              <div className={styles.resources.card.header.wrapper}>
                <div className={styles.resources.card.header.iconWrapper}>
                  <Code className={styles.resources.card.header.icon} />
                </div>
                <h3 className={styles.resources.card.header.title}>
                  API Documentation
                </h3>
              </div>
              <p className={styles.resources.card.description}>
                Detailed guides and references for all API endpoints
              </p>
              <div className={styles.resources.card.link.wrapper}>
                <span className={styles.resources.card.link.text}>
                  View docs
                </span>
                <ArrowRight className={styles.resources.card.link.icon} />
              </div>
            </div>
          </a>

          <a href="/examples" className={styles.resources.card.wrapper}>
            <div className={styles.resources.card.container}>
              <div className={styles.resources.card.header.wrapper}>
                <div className={styles.resources.card.header.iconWrapper}>
                  <Code className={styles.resources.card.header.icon} />
                </div>
                <h3 className={styles.resources.card.header.title}>
                  Example Projects
                </h3>
              </div>
              <p className={styles.resources.card.description}>
                Sample integrations and implementation examples
              </p>
              <div className={styles.resources.card.link.wrapper}>
                <span className={styles.resources.card.link.text}>
                  View examples
                </span>
                <ArrowRight className={styles.resources.card.link.icon} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletionPage;
