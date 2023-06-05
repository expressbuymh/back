import 'dotenv/config.js'
import '../../config/database.js'
import { categories } from './categories.js'
import { departaments } from './departaments.js'
import { products } from './products.js'
import { subCategories } from './subCateogires.js'
import { users } from './users.js'
import Category from '../Categories.js'
import Departament from '../Departaments.js'
import Product from '../Products.js'
import SubCategory from '../subCategory.js'
import User from '../User.js'

const newDepartament = async (departaments) => await Departament.insertMany(departaments)
const newUser = async (users) => await User.insertMany(users)

const newCategories = async (categories) => {
  for (const categorie of categories) {
    const departament = await Departament.findOne({ name: categorie.deparment_id })
    categorie.deparment_id = departament._id
    await Category.create(categorie)
  }
}
const newSubCategories = async (subCategories) => {
  for (const sub of subCategories) {
    const category = await Category.findOne({ name: sub.category_id })
    sub.departament_id = category._id
    await SubCategory.create(categories)
  }
}

const newProduct = async (products) => {
  for (let product of products) {
    let department = await Departament.findOne({ name: product.deparment_id })
    let category = await Category.findOne({ name: product.category_id })
    let subCategory = await SubCategory.findOne({ name: product.subCategory_id })
    product.deparment_id = department._id
    product.category_id = category._id
    product.subCategory_id = subCategory._id
    await Product.create(product)
  }
}
const data = async () => {
  await newDepartament(departaments)
  await newCategories(categories)
  await newUser(users)
  await newSubCategories(subCategories)
  await newProduct(products)
}

data() 
