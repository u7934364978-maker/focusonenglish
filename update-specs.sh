#!/bin/bash
# Update all spec files to use domcontentloaded instead of networkidle

for file in e2e/*.spec.ts; do
  if [[ -f "$file" ]] && [[ "$file" != *"basic-navigation"* ]]; then
    echo "Updating $file..."
    sed -i "s/waitForLoadState('networkidle')/waitForLoadState('domcontentloaded', { timeout: 30000 })/g" "$file"
    sed -i "s/waitForTimeout(2000)/waitForTimeout(3000)/g" "$file"
  fi
done

echo "✓ All spec files updated!"
