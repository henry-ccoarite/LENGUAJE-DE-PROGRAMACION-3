#!/usr/bin/env bash
# ============================================================
# build.sh — recompiles every src/*.jsx file into build/*.js
# (plain JS, no JSX) so index.html can load them as normal
# <script src="..."> tags with zero runtime dependencies.
#
# Requirements: Node.js + TypeScript (npm install -g typescript)
# Usage:        ./build.sh
# ============================================================
set -e
cd "$(dirname "$0")"

rm -rf build
mkdir -p build

npx tsc \
  src/icons.jsx \
  src/FadingVideo.jsx \
  src/BlurText.jsx \
  src/Navbar.jsx \
  src/Hero.jsx \
  src/Capabilities.jsx \
  src/App.jsx \
  --jsx react \
  --allowJs \
  --checkJs false \
  --target es2017 \
  --outDir build \
  --skipLibCheck \
  --module none \
  --ignoreDeprecations 6.0

echo "Build complete -> build/*.js"
