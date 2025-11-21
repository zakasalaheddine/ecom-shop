const fs = require('fs');

// Load categories and products
const categories = JSON.parse(fs.readFileSync('products-categories.json', 'utf-8'));
const products = JSON.parse(fs.readFileSync('products-formatted.json', 'utf-8'));

// Create category lookup by label (excluding T-shirts and Hoodies)
const categoryMap = {};
categories.forEach(cat => {
  if (cat.label !== 'T-shirts' && cat.label !== 'Hoodies & Sweatshirts') {
    categoryMap[cat.label] = cat._id;
  }
});

console.log('📋 Available categories:', Object.keys(categoryMap).join(', '));

/**
 * Analyze product and assign the most appropriate category
 */
function assignCategory(product) {
  const text = `${product.title} ${product.tags.join(' ')}`.toLowerCase();

  // Category matching rules (order matters - most specific first)
  const rules = [
    // Occasions - very specific
    { keywords: ['cruise'], category: 'Cruise & Vacation' },
    { keywords: ['halloween', 'spooky', 'monster'], category: 'Halloween' },
    { keywords: ['valentine', 'croc my world'], category: 'Valentine\'s Day' },
    { keywords: ['thanksgiving', 'thankful'], category: 'Thanksgiving' },
    { keywords: ['christmas', 'santa', 'holiday', 'festive', 'xmas', 'sleigh', 'reindeer', 'better not pout', 'hot cocoa'], category: 'Christmas & Holiday' },

    // Sports - must come before Mom/Dad
    { keywords: ['wrestling mom', 'wrestling dad', 'wrestler'], category: 'Wrestling' },
    { keywords: ['soccer mom', 'soccer dad', 'soccer'], category: 'Soccer' },
    { keywords: ['softball', 'baseball', 'bowling', 'swim'], category: 'Sports Mom & Dad' },

    // Graduation/Senior - specific
    { keywords: ['senior 2026', 'class of 2026', 'graduation', 'graduated', 'senior night', 'senior mom', 'senior dad', 'officially a senior'], category: 'Graduation & Senior' },

    // Professions
    { keywords: ['teacher', 'educator', 'classroom', 'back to school', 'sped squad'], category: 'Teacher Gifts' },
    { keywords: ['nurse', 'nursing', 'medical', 'doctor', 'cardiac'], category: 'Nurse & Medical' },

    // Activities
    { keywords: ['beach', 'ocean', 'float'], category: 'Beach & Summer' },
    { keywords: ['fishing', 'fish-ally', 'angler'], category: 'Fishing' },
    { keywords: ['bbq', 'grilling', 'meat softly'], category: 'BBQ & Grilling' },
    { keywords: ['trumpet', 'music', 'musician', 'instrument', 'destroy silence'], category: 'Music' },
    { keywords: ['workout', 'fitness', 'gym', 'lifting', 'weights'], category: 'Fitness & Gym' },
    { keywords: ['math', 'science', 'formula', 'astronomy', 'telescope'], category: 'Math & Science' },

    // Life events
    { keywords: ['retirement', 'retired', 'retiring'], category: 'Retirement' },
    { keywords: ['birthday', 'legend shirt', 'year old legend', 'born in', 'bday'], category: 'Birthday' },

    // Family - broader categories
    { keywords: ['grandma', 'grandpa', 'nana', 'granny', 'pops', 'pap'], category: 'Grandparents' },
    { keywords: ['mom', 'mama', 'mother'], category: 'Mom & Mother\'s Day' },
    { keywords: ['dad', 'father'], category: 'Dad & Father\'s Day' },
    { keywords: ['cousin', 'uncle'], category: 'Family' },

    // Animals
    { keywords: ['cat', 'pet', 'animal', 'sasquatch', 'shark', 'crocodile'], category: 'Animals & Pets' },

    // Default catch-all
    { keywords: ['funny', 'humor', 'sarcastic', 'joke', 'meme'], category: 'Funny & Humor' },
  ];

  // Find first matching rule
  for (const rule of rules) {
    if (rule.keywords.some(keyword => text.includes(keyword))) {
      return categoryMap[rule.category];
    }
  }

  // Default fallback to Funny & Humor (since most products are humorous)
  return categoryMap['Funny & Humor'];
}

// Update products
console.log('\n🔄 Assigning categories to products...\n');

const categoryCount = {};
let updatedCount = 0;

const updatedProducts = products.map(product => {
  const newCategoryId = assignCategory(product);
  const categoryLabel = Object.keys(categoryMap).find(key => categoryMap[key] === newCategoryId);

  if (product.category !== newCategoryId) {
    updatedCount++;
  }

  // Count for statistics
  categoryCount[categoryLabel] = (categoryCount[categoryLabel] || 0) + 1;

  return {
    ...product,
    category: newCategoryId
  };
});

// Save updated products
fs.writeFileSync(
  'products-formatted.json',
  JSON.stringify(updatedProducts, null, 2)
);

console.log('✓ Products updated successfully!\n');
console.log('📊 Category Distribution:');
console.log('─'.repeat(50));

// Sort by count and display
Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => {
    console.log(`  ${category.padEnd(30)} ${count.toString().padStart(3)} products`);
  });

console.log('─'.repeat(50));
console.log(`  ${'TOTAL'.padEnd(30)} ${updatedProducts.length.toString().padStart(3)} products`);
console.log(`\n✨ ${updatedCount} products were recategorized`);
