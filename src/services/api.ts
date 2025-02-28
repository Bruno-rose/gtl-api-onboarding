const BASE_URL = 'https://api.greptile.com/v2';

interface ApiResponse {
  data?: any;
  error?: string;
}

export const api = {
  async repositories(repoUrl: string, branch?: string, githubToken?: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${BASE_URL}/repositories`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GREPTILE_API_KEY}`,
          'X-GitHub-Token': githubToken || import.meta.env.VITE_GITHUB_TOKEN || '',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          remote: repoUrl.includes("github.com") ? "github" : repoUrl.includes("gitlab.com") ? "gitlab" : "other",
          repository: repoUrl.split('/').slice(-2).join('/'),
          branch: branch || 'main'
        }),
      });
      return { data: await response.json() };
    } catch (error) {
      return { error: (error as Error).message };
    }
  },

  async query(repoId: string, query: string, githubToken?: string): Promise<ApiResponse> {
    try {
      console.log(repoId, query, githubToken);
      const response = await fetch(`${BASE_URL}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GREPTILE_API_KEY}`,
          'X-GitHub-Token': githubToken || import.meta.env.VITE_GITHUB_TOKEN || '',
        },
        body: JSON.stringify({
          messages: [{
            id: "123123123",
            content: query,
            role: "user"
          }],
          repositories: [{
            remote: repoId.split(':')[0],
            branch: repoId.split(':')[1], 
            repository: repoId.split(':')[2]
          }]
        }),
      });
      return { data: await response.json() };
    } catch (error) {
      return { error: (error as Error).message };
    }
  },

  async search(repoId: string): Promise<ApiResponse> {
    try {
      const encodedRepoId = encodeURIComponent(repoId);
      const response = await fetch(`${BASE_URL}/repositories/${encodedRepoId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GREPTILE_API_KEY}`
        }
      });
      return { data: await response.json() };
    } catch (error) {
      return { error: (error as Error).message };
    }
  },
}; 