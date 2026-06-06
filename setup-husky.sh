#!/bin/bash

# Install dependencies if not present
echo "Installing Husky and Commitlint..."
pnpm add -Dw husky @commitlint/config-conventional @commitlint/cli

# Initialize Husky
echo "Initializing Husky..."
pnpm exec husky init

# Create pre-commit hook
echo "Setting up pre-commit hook..."
echo "pnpm lint && pnpm check-types" > .husky/pre-commit

# Create pre-push hook
echo "Setting up pre-push hook..."
echo "pnpm test" > .husky/pre-push

# Create commit-msg hook
echo "Setting up commit-msg hook..."
echo 'pnpm exec commitlint --edit "$1"' > .husky/commit-msg

# Make hooks executable
chmod +x .husky/pre-commit .husky/pre-push .husky/commit-msg

echo "Husky Git hooks set up successfully!"
echo "Note: You can bypass hooks using --no-verify (e.g., git commit -m 'feat: bypass' --no-verify)"
