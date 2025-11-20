'use client'

import { useState } from 'react'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import type { Id } from '../../../convex/_generated/dataModel'
import { Plus, Package, Tag, Layers } from 'lucide-react'
import { ProductModal } from '@/components/admin/ProductModal'
import { ProductList } from '@/components/admin/ProductList'
import { CategoryModal } from '@/components/admin/CategoryModal'
import { CategoryList } from '@/components/admin/CategoryList'
import { TypeModal } from '@/components/admin/TypeModal'
import { TypeList } from '@/components/admin/TypeList'
import { ImportExport } from '@/components/admin/ImportExport'
import { UserButton } from '@clerk/nextjs'

type TabType = 'products' | 'categories' | 'types'

interface ProductForm {
  id?: Id<'products'>
  title: string
  price: string
  category: string
  type: string
  imageUrl: string
  listingUrl: string
}

interface CategoryForm {
  id?: Id<'categories'>
  label: string
  imageUrl: string
}

interface TypeForm {
  id?: Id<'types'>
  label: string
  imageUrl: string
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>('products')
  const [showProductModal, setShowProductModal] = useState(false)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showTypeModal, setShowTypeModal] = useState(false)

  const products = useQuery(api.products.list)
  const categories = useQuery(api.categories.list)
  const types = useQuery(api.types.list)

  const [productForm, setProductForm] = useState<ProductForm>({
    title: '',
    price: '',
    category: '',
    type: '',
    imageUrl: '',
    listingUrl: ''
  })

  const [categoryForm, setCategoryForm] = useState<CategoryForm>({
    label: '',
    imageUrl: ''
  })

  const [typeForm, setTypeForm] = useState<TypeForm>({
    label: '',
    imageUrl: ''
  })

  const handleEditProduct = (product: {
    _id: Id<'products'>
    title: string
    price: number
    category: Id<'categories'>
    type: Id<'types'>
    imageUrl: string
    listingUrl: string
  }) => {
    setProductForm({
      id: product._id,
      title: product.title,
      price: product.price.toString(),
      category: product.category,
      type: product.type,
      imageUrl: product.imageUrl,
      listingUrl: product.listingUrl
    })
    setShowProductModal(true)
  }

  const handleEditCategory = (category: { _id: Id<'categories'>; label: string; imageUrl: string }) => {
    setCategoryForm({
      id: category._id,
      label: category.label,
      imageUrl: category.imageUrl
    })
    setShowCategoryModal(true)
  }

  const handleEditType = (type: { _id: Id<'types'>; label: string; imageUrl: string }) => {
    setTypeForm({
      id: type._id,
      label: type.label,
      imageUrl: type.imageUrl
    })
    setShowTypeModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your products, categories, and types</p>
          </div>
          <UserButton />
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'products'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Package className="inline-block mr-2 h-4 w-4" />
              Products
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('categories')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'categories'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Tag className="inline-block mr-2 h-4 w-4" />
              Categories
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('types')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'types'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Layers className="inline-block mr-2 h-4 w-4" />
              Types
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="mt-8 pb-16">
          {/* Products Tab */}
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Products ({products?.length || 0})</h2>
                <div className="flex gap-3">
                  <ImportExport type="products" />
                  <button
                    type="button"
                    onClick={() => {
                      setProductForm({
                        title: '',
                        price: '',
                        category: '',
                        type: '',
                        imageUrl: '',
                        listingUrl: ''
                      })
                      setShowProductModal(true)
                    }}
                    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Product
                  </button>
                </div>
              </div>

              <ProductList products={products} onEdit={handleEditProduct} />
            </div>
          )}

          {/* Categories Tab */}
          {activeTab === 'categories' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Categories ({categories?.length || 0})</h2>
                <div className="flex gap-3">
                  <ImportExport type="categories" />
                  <button
                    type="button"
                    onClick={() => {
                      setCategoryForm({ label: '', imageUrl: '' })
                      setShowCategoryModal(true)
                    }}
                    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Category
                  </button>
                </div>
              </div>

              <CategoryList categories={categories} onEdit={handleEditCategory} />
            </div>
          )}

          {/* Types Tab */}
          {activeTab === 'types' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Types ({types?.length || 0})</h2>
                <div className="flex gap-3">
                  <ImportExport type="types" />
                  <button
                    type="button"
                    onClick={() => {
                      setTypeForm({ label: '', imageUrl: '' })
                      setShowTypeModal(true)
                    }}
                    className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Add Type
                  </button>
                </div>
              </div>

              <TypeList types={types} onEdit={handleEditType} />
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <ProductModal
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
        productForm={productForm}
        setProductForm={setProductForm}
        categories={categories}
        types={types}
      />

      <CategoryModal
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        categoryForm={categoryForm}
        setCategoryForm={setCategoryForm}
      />

      <TypeModal
        isOpen={showTypeModal}
        onClose={() => setShowTypeModal(false)}
        typeForm={typeForm}
        setTypeForm={setTypeForm}
      />
    </div>
  )
}
