const fs = require('fs');
const path = require('path');

// Read the source data
const csvjsonPath = path.join(__dirname, 'csvjson.json');
const sourceData = JSON.parse(fs.readFileSync(csvjsonPath, 'utf8'));

console.log(`Processing ${sourceData.length} products...`);

// Extract unique categories
const categoriesSet = new Set();
sourceData.forEach(product => {
  if (product.category) {
    categoriesSet.add(product.category);
  }
});

// Type patterns for detection
const typePatterns = [
  { pattern: /sweatshirt|pullover|crewneck|jumper/i, type: 'Sweatshirt' },
  { pattern: /hoodie/i, type: 'Hoodie' },
  { pattern: /tank\s*top/i, type: 'Tank Top' },
  { pattern: /long\s*sleeve/i, type: 'Long Sleeve' },
  { pattern: /t-shirt|tee|shirt|top|apparel/i, type: 'T-Shirt' },
];

// Determine type from title
function getTypeFromTitle(title) {
  for (const { pattern, type } of typePatterns) {
    if (pattern.test(title)) {
      return type;
    }
  }
  // Default to T-Shirt if no type detected
  return 'T-Shirt';
}

// Get price based on type
function getPriceForType(type) {
  const priceMap = {
    'T-Shirt': 24.99,
    'Sweatshirt': 34.99,
    'Hoodie': 39.99,
    'Tank Top': 19.99,
    'Long Sleeve': 29.99,
  };
  return priceMap[type] || 24.99;
}

// Generate IDs for categories and types (simple hash-like IDs)
function generateId(str) {
  // Create a simple ID based on the string
  return str.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30);
}

// Extract types from all products first
const typesSet = new Set();
sourceData.forEach(product => {
  const productType = getTypeFromTitle(product.title);
  typesSet.add(productType);
});

// Create categories array (without id field - Convex will generate _id)
const categories = Array.from(categoriesSet).map(label => ({
  label: label,
  imageUrl: 'https://picsum.photos/seed/' + generateId(label) + '/200/200'
}));

// Create types array (without id field - Convex will generate _id)
const types = Array.from(typesSet).map(label => ({
  label: label,
  imageUrl: 'https://picsum.photos/seed/' + generateId(label) + '/200/200'
}));

// Create category and type lookup maps
const categoryMap = {};
categories.forEach(cat => {
  categoryMap[cat.label] = cat.id;
});

const typeMap = {};
types.forEach(type => {
  typeMap[type.label] = type.id;
});

// Create a mapping guide for manual ID replacement
const mappingGuide = {
  categories: {},
  types: {}
};

categoriesSet.forEach(label => {
  mappingGuide.categories[label] = `REPLACE_WITH_${generateId(label).toUpperCase()}_ID`;
});

typesSet.forEach(label => {
  mappingGuide.types[label] = `REPLACE_WITH_${generateId(label).toUpperCase()}_ID`;
});

// Transform products with placeholder IDs
const transformedProducts = sourceData.map(product => {
  const productType = getTypeFromTitle(product.title);
  const price = getPriceForType(productType);

  return {
    title: product.title,
    price: price,
    category: mappingGuide.categories[product.category] || `REPLACE_WITH_CATEGORY_ID`,
    type: mappingGuide.types[productType] || `REPLACE_WITH_TYPE_ID`,
    images: product.images || [],
    description: product.description || '',
    tags: product.tags || [],
    etsyId: product.id || undefined
  };
});

// Write output files
const categoriesOutput = path.join(__dirname, 'categories-import.json');
const typesOutput = path.join(__dirname, 'types-import.json');
const productsOutput = path.join(__dirname, 'products-import.json');
const mappingOutput = path.join(__dirname, 'id-mapping-guide.json');

fs.writeFileSync(categoriesOutput, JSON.stringify(categories, null, 2));
fs.writeFileSync(typesOutput, JSON.stringify(types, null, 2));
fs.writeFileSync(productsOutput, JSON.stringify(transformedProducts, null, 2));
fs.writeFileSync(mappingOutput, JSON.stringify(mappingGuide, null, 2));

console.log('\n✅ Transformation complete!');
console.log(`\n📊 Statistics:`);
console.log(`   - Categories: ${categories.length}`);
console.log(`   - Types: ${types.length}`);
console.log(`   - Products: ${transformedProducts.length}`);
console.log(`\n📁 Output files:`);
console.log(`   - ${categoriesOutput}`);
console.log(`   - ${typesOutput}`);
console.log(`   - ${productsOutput}`);
console.log(`   - ${mappingOutput}`);
console.log(`\n📋 Categories found:`);
categories.forEach(cat => console.log(`   - ${cat.label}`));
console.log(`\n📋 Types found:`);
types.forEach(type => console.log(`   - ${type.label}`));
console.log(`\n⚠️  IMPORTANT: Follow these steps to import:`);
console.log(`\n   Step 1: Import categories and types first`);
console.log(`   ----------------------------------------`);
console.log(`   1. Import categories-import.json in admin panel`);
console.log(`   2. Import types-import.json in admin panel`);
console.log(`\n   Step 2: Get the generated IDs`);
console.log(`   -----------------------------`);
console.log(`   3. Export categories and types from admin panel`);
console.log(`   4. Open the exported files to get the _id values`);
console.log(`\n   Step 3: Update the products file`);
console.log(`   --------------------------------`);
console.log(`   5. Replace placeholders in products-import.json with actual _id values:`);
console.log(`      - Find the _id for "T-shirts" category and replace all "REPLACE_WITH_T_SHIRTS_ID"`);
console.log(`      - Find the _id for "Hoodies & Sweatshirts" and replace "REPLACE_WITH_HOODIES___SWEATSHIRTS_ID"`);
console.log(`      - Find the _id for "T-Shirt" type and replace "REPLACE_WITH_T_SHIRT_ID"`);
console.log(`      - Find the _id for "Sweatshirt" type and replace "REPLACE_WITH_SWEATSHIRT_ID"`);
console.log(`\n   Step 4: Import products`);
console.log(`   -----------------------`);
console.log(`   6. Import the updated products-import.json file`);
console.log(`\n💡 Tip: Use find & replace in your editor to replace all placeholder IDs at once!`);
