import React, { useRef } from 'react';
import '../Styles/Profile.css';
import { Link } from "react-router-dom";
import Header from './Header';
import { MdContentCopy } from 'react-icons/md';

const Profile = () => {
    const textAreaRef = useRef(null);
    const address = '4fJScLXQYafWCfRS29t6EsqhTH3RCeZaRsWFCwidsQAQ';
    const minimize = `${address?.slice(0, 6)}..${address?.slice(-4)}`;

    const copyToClipboard = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
    }
    return (
        <div className='profile__section'>
            <div style={{marginRight:'40px',}}><Header /></div>
           <div className='profile__img'>
              <div className='img__div'></div>
              <div className='address__edit' >
                <p><span style={{color:'white',}} ref={textAreaRef}>{minimize}</span> <span style={{}} onClick={copyToClipboard}><MdContentCopy style={{color:'#3e00b3',paddingTop:'50px'}}/></span></p>
                <Link to="/signup" style={{textDecoration:'none', outline:'none',}}><button style={{backgroundColor:'#17076C',outline:'none', textDecoration:'none', border:'1px solid transparent', color:'white', marginTop:'-10px', height:'30px'}}>Edit profile</button></Link>
              </div>
              <div>
                <nav className='diff__sections'>
                    <ul>My Items</ul>
                    <ul>Collections</ul>
                    <ul>Activities</ul>
                </nav>
              </div>
           </div>

           <div clasName='activities__space'>
        
           </div>
        </div>
    )
}

export default Profile;