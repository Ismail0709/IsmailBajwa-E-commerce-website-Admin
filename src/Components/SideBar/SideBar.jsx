import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import add_product_item from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Link to={"/addProduct"} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
            <img src={add_product_item} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listProduct"} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default SideBar
