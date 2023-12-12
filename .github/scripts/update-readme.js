const fs = require('fs');

// Get the GitHub username of the latest visitor
const visitorUsername = process.env.GITHUB_ACTOR || 'Visitor';

// Read the current README.md content
let readmeContent = fs.readFileSync('README.md', 'utf-8');

// Replace a placeholder with the visitor's username
readmeContent = readmeContent.replace(/<!-- VISITOR_USERNAME -->/g, visitorUsername);

// Write the updated content back to README.md
fs.writeFileSync('README.md', readmeContent, 'utf-8');
