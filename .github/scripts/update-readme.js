const fs = require('fs');
const axios = require('axios');

// Get the latest commit information
async function getLatestCommit() {
  try {
    const response = await axios.get('https://api.github.com/repos/:owner/:repo/commits/:ref');
    return response.data.committer.login;
  } catch (error) {
    console.error('Error fetching latest commit information:', error.message);
    return 'Visitor';
  }
}

// Update README with the latest commit's username
async function updateReadme() {
  const visitorUsername = await getLatestCommit();

  // Read the current README.md content
  let readmeContent = fs.readFileSync('README.md', 'utf-8');

  // Replace a placeholder with the visitor's username
  readmeContent = readmeContent.replace(/<!-- VISITOR_USERNAME -->/g, visitorUsername);

  // Write the updated content back to README.md
  fs.writeFileSync('README.md', readmeContent, 'utf-8');
}

// Run the updateReadme function
updateReadme();
