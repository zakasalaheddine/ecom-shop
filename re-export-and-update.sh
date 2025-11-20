#!/bin/bash

echo "📋 Step-by-step instructions:"
echo ""
echo "1. Go to your admin panel (/admin)"
echo "2. In the Categories tab, click 'Export JSON'"
echo "3. Save it as 'categories-export.json' in this folder"
echo "4. In the Types tab, click 'Export JSON'"  
echo "5. Save it as 'types-export.json' in this folder"
echo ""
echo "After you've done that, press Enter to run the update script..."
read

echo ""
echo "🔄 Running update script..."
node update-product-ids.js

echo ""
echo "✅ Done! Now you can import products-import-ready.json"
