import React from 'react';
import '../Styles/Collection.css';
import logo from '../solomon.png';
import { Link } from "react-router-dom";
import { BsCardImage } from 'react-icons/bs';

const Collection = () => {
    return (
        <div className='collection__page'>
            <div className='collection__logo'>
                <span><img src={logo} style={{fontSize:'20px',height:'45px',marginTop:'25px',borderRadius:'15px',}} alt="solomon-logo"/></span>
                <Link to="/" style={{textDecoration:'none', outline:'none',}}><h1 style={{color:'white',paddingLeft:'10px', paddingTop:'8px', cursor:'pointer',}} className='header-text'>Solomon</h1></Link>
            </div>

            <div className='collection__creation__section'>
                <h2>Create new item</h2>
                <p>File type supported: JPG, PNG. Max Size:5 MB</p>
                <div className='img'>
                    <span><BsCardImage style={{width:'80px', height:'80px', color:'white'}}/></span>
                    <p>Upload your cover art</p>
                </div>
                <div>
                    <p style={{textAlign:'left'}}>Title</p>
                    <input type='text' placeholder='Fill your collection tItle'/>
                    <p>Categories</p>
                </div>
            </div>
        </div>
    )
}

export default Collection;