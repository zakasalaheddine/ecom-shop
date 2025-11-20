# Import/Export Examples

This directory contains sample JSON files demonstrating the format required for importing data into the admin dashboard.

## File Formats

### Categories (`categories-sample.json`)
```json
[
  {
    "label": "Category Name",
    "imageUrl": "https://example.com/image.jpg"
  }
]
```

### Types (`types-sample.json`)
```json
[
  {
    "label": "Type Name",
    "imageUrl": "https://example.com/image.jpg"
  }
]
```

### Products (`products-sample.json`)
```json
[
  {
    "title": "Product Title",
    "price": 29.99,
    "category": "category_id_here",
    "type": "type_id_here",
    "imageUrl": "https://example.com/image.jpg",
    "listingUrl": "https://example.com/product"
  }
]
```

**Note:** When importing products, you must use valid category and type IDs from your database. Export your categories and types first to get their IDs, or create them before importing products.

## Usage

### Exporting Data
1. Navigate to the admin dashboard (`/admin`)
2. Select the tab you want to export (Products, Categories, or Types)
3. Click the "Export JSON" button
4. The JSON file will be downloaded automatically with a timestamp

### Importing Data
1. Navigate to the admin dashboard (`/admin`)
2. Select the tab you want to import into
3. Click the "Import JSON" button
4. Select your JSON file
5. The data will be imported and a success message will appear

## Tips

- Always export your data before making bulk changes
- Import categories and types before importing products (since products reference them)
- Validate your JSON format before importing
- The import process will add new records without deleting existing ones
