import React from 'react'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navabar.css"
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#wgpt3'>What is GPT3 ?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)
const Navabar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navabar'>
      <div className='gpt3__navabar-links'>
        <div className='gpt3__navabar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navabar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navabar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navabar-menu'>
        {toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        } 
        {toggleMenu && (
          <div className='gpt3__navabar-menu_container scale-up-center'>
            <div className='gpt3__navabar-menu_container-links'>
              <Menu />
              <div className='gpt3__navabar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navabar
