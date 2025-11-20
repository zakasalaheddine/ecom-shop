/**
 * This script automatically updates the products-import.json file
 * with the correct category and type IDs from your Convex database.
 *
 * Usage:
 * 1. First, import categories-import.json and types-import.json in the admin panel
 * 2. Then export both categories and types from the admin panel
 * 3. Save the exports as 'categories-export.json' and 'types-export.json'
 * 4. Run: node update-product-ids.js
 */

const fs = require('fs');
const path = require('path');

try {
  // Read the exported categories and types (with _id values from Convex)
  const categoriesExport = JSON.parse(fs.readFileSync(path.join(__dirname, 'categories-export.json'), 'utf8'));
  const typesExport = JSON.parse(fs.readFileSync(path.join(__dirname, 'types-export.json'), 'utf8'));

  // Read the products file with placeholder IDs
  const productsImport = JSON.parse(fs.readFileSync(path.join(__dirname, 'products-import.json'), 'utf8'));

  console.log('📖 Reading exported data...');
  console.log(`   - Found ${categoriesExport.length} categories`);
  console.log(`   - Found ${typesExport.length} types`);
  console.log(`   - Found ${productsImport.length} products to update`);

  // Create lookup maps: label -> _id
  const categoryIdMap = {};
  categoriesExport.forEach(cat => {
    categoryIdMap[cat.label] = cat._id;
  });

  const typeIdMap = {};
  typesExport.forEach(type => {
    typeIdMap[type.label] = type._id;
  });

  console.log('\n🔍 Category ID mappings:');
  Object.entries(categoryIdMap).forEach(([label, id]) => {
    console.log(`   "${label}" -> ${id}`);
  });

  console.log('\n🔍 Type ID mappings:');
  Object.entries(typeIdMap).forEach(([label, id]) => {
    console.log(`   "${label}" -> ${id}`);
  });

  // Update products with actual IDs
  let updatedCount = 0;
  const updatedProducts = productsImport.map(product => {
    // Try to find the actual category ID by matching the placeholder pattern
    let categoryId = product.category;
    if (product.category.includes('T_SHIRTS')) {
      categoryId = categoryIdMap['T-shirts'];
      updatedCount++;
    } else if (product.category.includes('HOODIES___SWEATSHIRTS')) {
      categoryId = categoryIdMap['Hoodies & Sweatshirts'];
      updatedCount++;
    }

    // Try to find the actual type ID
    let typeId = product.type;
    if (product.type.includes('T_SHIRT_ID')) {
      typeId = typeIdMap['T-Shirt'];
      updatedCount++;
    } else if (product.type.includes('SWEATSHIRT_ID')) {
      typeId = typeIdMap['Sweatshirt'];
      updatedCount++;
    }

    return {
      ...product,
      category: categoryId,
      type: typeId
    };
  });

  // Write the updated products file
  const outputPath = path.join(__dirname, 'products-import-ready.json');
  fs.writeFileSync(outputPath, JSON.stringify(updatedProducts, null, 2));

  console.log('\n✅ Update complete!');
  console.log(`\n📊 Statistics:`);
  console.log(`   - Products updated: ${productsImport.length}`);
  console.log(`   - ID replacements: ${updatedCount}`);
  console.log(`\n📁 Output file:`);
  console.log(`   - ${outputPath}`);
  console.log(`\n✨ You can now import products-import-ready.json in your admin panel!`);

} catch (error) {
  console.error('\n❌ Error:', error.message);
  console.error('\n📝 Make sure you have:');
  console.error('   1. Imported categories-import.json and types-import.json first');
  console.error('   2. Exported them from admin panel as categories-export.json and types-export.json');
  console.error('   3. Placed the export files in the same directory as this script');
}
