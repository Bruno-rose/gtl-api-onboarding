import { Code, Search, Database } from "lucide-react";
import { styles } from "./styles";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header.wrapper}>
        <h1 className={styles.header.title}>Welcome to Greptile</h1>
        <p className={styles.header.subtitle}>
          AI expert on any codebase, as an API
        </p>
      </div>

      <div className={styles.content.wrapper}>
        <p className={styles.content.text}>
          Greptile indexes large repos and then answers hard questions about
          them in natural language. Think of it as an AI expert on your
          codebase, available as an API.
        </p>

        <h2 className={styles.content.section.title}>Example queries:</h2>
        <ul className={styles.content.section.list}>
          <li>"How does auth work in this codebase?"</li>
          <li>"Generate a comment for this PR with codebase context"</li>
          <li>"How would I add pagination to the /retrieve endpoint?"</li>
        </ul>

        <h2 className={styles.content.section.title}>
          You can use the API in many ways:
        </h2>
        <ul className={styles.content.section.list}>
          <li>Integrate with Slack to answer codebase questions.</li>
          <li>
            Integrate with Sentry to enrich alerts with codebase context,
            diagnoses, and resolution steps.
          </li>
          <li>
            Integrate with GitHub to review PRs and comment on new issues.
          </li>
        </ul>

        <p className={styles.content.text}>
          We offer a growing list of first-party integrations, or you can use
          the API to build your own.
        </p>
      </div>

      <div className={styles.operations.container}>
        <h2 className={styles.operations.title}>Order of Operations</h2>
        <div className={styles.operations.grid}>
          {/* Index repo(s) card */}
          <div className={styles.operations.card.wrapper}>
            <div className={styles.operations.card.header.wrapper}>
              <div className={styles.operations.card.header.number}>1</div>
              <h3 className={styles.operations.card.header.title}>
                Index repo(s)
              </h3>
            </div>
            <div className={styles.operations.card.content.wrapper}>
              <Database className={styles.operations.card.content.icon} />
              <p className={styles.operations.card.content.text}>
                Use{" "}
                <code className={styles.operations.card.content.code}>
                  POST /repositories
                </code>{" "}
                to submit a repo to get indexed.
              </p>
            </div>
          </div>

          {/* Query repos card */}
          <div className={styles.operations.card.wrapper}>
            <div className={styles.operations.card.header.wrapper}>
              <div className={styles.operations.card.header.number}>2</div>
              <h3 className={styles.operations.card.header.title}>
                Query repos
              </h3>
            </div>
            <div className={styles.operations.card.content.wrapper}>
              <Code className={styles.operations.card.content.icon} />
              <p className={styles.operations.card.content.text}>
                Use{" "}
                <code className={styles.operations.card.content.code}>
                  POST /query
                </code>{" "}
                to query the repo or repos in natural language.
              </p>
            </div>
          </div>

          {/* Search repos card */}
          <div className={styles.operations.card.wrapper}>
            <div className={styles.operations.card.header.wrapper}>
              <div className={styles.operations.card.header.number}>3</div>
              <h3 className={styles.operations.card.header.title}>
                Search repos
              </h3>
            </div>
            <div className={styles.operations.card.content.wrapper}>
              <Search className={styles.operations.card.content.icon} />
              <p className={styles.operations.card.content.text}>
                Use{" "}
                <code className={styles.operations.card.content.code}>
                  POST /search
                </code>{" "}
                to search the repo or repos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info.container}>
        <div className={styles.info.grid}>
          <div>
            <h3 className={styles.info.section.title}>Base URL</h3>
            <p className={styles.info.section.text}>
              The base URL for all API requests is:
            </p>
            <div className={styles.info.section.code}>
              <code>https://api.greptile.com/v2/</code>
            </div>
          </div>

          <div>
            <h3 className={styles.info.section.title}>Authentication</h3>
            <p className={styles.info.section.text}>Two tokens are required:</p>
            <ul className="space-y-3">
              <li className={styles.info.section.code}>
                <p className="font-semibold">Greptile API key:</p>
                <p className="text-sm text-gray-700">
                  Include the API key in the request header:{" "}
                  <code>Authorization: Bearer &lt;API_KEY&gt;</code>
                </p>
              </li>
              <li className={styles.info.section.code}>
                <p className="font-semibold">GitHub Token:</p>
                <p className="text-sm text-gray-700">
                  Include this header with your GitHub/Gitlab access token:{" "}
                  <code>X-GitHub-Token: &lt;GITHUB_TOKEN&gt;</code>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
