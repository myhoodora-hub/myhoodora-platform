// scripts/ci-build.js
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

if (!process.env.EXPO_TOKEN) {
  console.log('EXPO_TOKEN not set — skipping eas build');
  process.exit(0);
}

try {
  console.log('EXPO_TOKEN is set — starting eas build');
  // Always do Android in CI
  console.log('Starting Android build');
  run('eas build --non-interactive --platform android');

  // Attempt iOS only if an App Store Connect API key (or other iOS creds) is provided
  // Set a secret like APP_STORE_CONNECT_KEY_JSON in your GitHub repo if you want iOS builds on CI.
  if (process.env.APP_STORE_CONNECT_KEY_JSON) {
    console.log('App Store Connect key found — starting iOS build');
    // write key file to disk if required by your setup:
    run('eas build --non-interactive --platform ios');
  } else {
    console.log('Skipping iOS build: no App Store Connect API key provided to CI');
  }
} catch (err) {
  console.error('eas build failed:', err.message);
  process.exit(err.status || 1);
}