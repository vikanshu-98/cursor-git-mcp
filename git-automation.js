const { execSync } = require("child_process");

// Function to run Git commands
function runGitCommand(command) {
    try {
        console.log(`🔄 Running: ${command}`);
        execSync(command, { stdio: "inherit" });
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }
}

// Automate Git Commit & Push
function automateGit() {
    console.log("🚀 Starting Git Automation...");
    runGitCommand("git add .");
    runGitCommand('git commit -m "Automated commit by Cursor AI"');
    runGitCommand("git push origin main");
    console.log("✅ Git Automation Complete!");
}

// Execute the function
automateGit();

