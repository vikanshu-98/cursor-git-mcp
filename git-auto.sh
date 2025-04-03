#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${RED}No changes to commit${NC}"
    exit 0
fi

# Get the commit message from argument or prompt
if [ "$#" -eq 1 ]; then
    COMMIT_MESSAGE="$1"
else
    echo -e "${GREEN}Enter commit message:${NC}"
    read -r COMMIT_MESSAGE
fi

# Check if commit message is empty
if [ -z "$COMMIT_MESSAGE" ]; then
    echo -e "${RED}Commit message cannot be empty${NC}"
    exit 1
fi

# Add all changes
echo -e "${GREEN}Adding all changes...${NC}"
git add .

# Commit changes
echo -e "${GREEN}Committing changes...${NC}"
git commit -m "$COMMIT_MESSAGE"

# Push changes
echo -e "${GREEN}Pushing changes...${NC}"
git push

echo -e "${GREEN}All done!${NC}" 