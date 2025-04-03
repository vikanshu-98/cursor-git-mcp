const { execSync } = require("child_process");

// Function to execute Git commands
function runGitCommand(command) {
    try {
        console.log(`🔄 Running: ${command}`);
        execSync(command, { stdio: "inherit" });
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }
}

// Run Git automation
function automateGit() {
    console.log("🚀 Starting Git Automation...");

    runGitCommand("git add .");
    runGitCommand('git commit -m "Automated commit"');
    runGitCommand("git push origin main");

    console.log("✅ Git Automation Complete!");
}

// Execute the function
automateGit();
