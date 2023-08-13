import React from 'react'
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-10  bg-[#0083db] text-white">
      <div className='lg:flex md:flex lg:flex-row md:flex-row grid grid-cols-2 justify-between lg:w-3/4 w-11/12 mx-auto'>
        <div className='flex flex-col pb-10 lg:pb-0 md:pb-0'>
          <span className="font-semibold text-2xl pb-3">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className='flex flex-col'>
          <span className="font-semibold text-2xl pb-3">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className='flex flex-col'>
          <span className="font-semibold text-2xl pb-3">Legal</span>
          <a className="link link-hover">Terms & Condition</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="font-semibold text-2xl pb-3">Socials</span>
          <div className='flex gap-2 pt-3'>
            <FaFacebookSquare className='text-4xl' />
            <FaGithubSquare className='text-4xl' />
            <FaInstagram className='text-4xl' />
            <FaLinkedin className='text-4xl' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer