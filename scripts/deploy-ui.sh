#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
UI_DIR="$REPO_ROOT/ui"
S3_BUCKET="s3://dreamix-worldcup-bucket"
CF_DISTRIBUTION="E1SNI95NIHJ3RV"

echo "==> Installing dependencies"
cd "$UI_DIR"
npm ci

echo "==> Building"
npm run build

echo "==> Uploading to S3"
aws s3 sync dist/ "$S3_BUCKET" --delete

echo "==> Invalidating CloudFront cache"
aws cloudfront create-invalidation \
  --distribution-id "$CF_DISTRIBUTION" \
  --paths "/*"

echo "==> Done"
