/* import 'dotenv/config.js'
import '../../config/database.js'
import { categories } from './categories.js'
import { departaments } from './departaments.js'
import { products } from './products.js'
import { subCategories } from './subCateogires.js'
import { users } from './users.js'
import Category from '../Categories.js'
import Departament from '../Departaments.js'
import Invoice from '../Invoice.js'
import Order from '../Orders.js'
import Product from '../Products.js'
import Stock from '../Stocks.js'
import SubCategory from '../subCategory.js'
import User from '../User.js'

const newDepartament = async (departaments) => await Category.insertMany(departaments)

const newCategories = async (categories) => {
  for (const categorie of categories) {
    const departament = await Departament.findOne({ Name: categorie.departament_id })
    categorie.departament_id = departament._id
    let newCategories = await Category.create(categorie)
  }
}
 const newCategories = async (categories) => {
  for (const categorie of categories) {
    const departament = await Departament.findOne({ Name: categorie.departament_id })
    categorie.departament_id = departament._id
  }
}

const data = async () => {
  await newDepartament(departaments)
  await newCategories(categories)
}

data() */
