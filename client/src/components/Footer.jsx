import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link
                        to='/'
                        className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
                    >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>
                    Murat's
                    </span>
                    Blog
                    </Link>
                
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                       <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='http://localhost:5173/' target='_black' rel='noopener noreferrer'>
                            Home
                        </Footer.Link>
                        <Footer.Link href='http://localhost:5173/sign-up' target='_black' rel='noopener noreferrer'>
                            Sign Up
                        </Footer.Link>
                        <Footer.Link href='http://localhost:5173/sign-in' target='_black' rel='noopener noreferrer'>
                            Sign In
                        </Footer.Link>
                    </Footer.LinkGroup> 
                    </div>
                    <div>
                       <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.linkedin.com/in/murat-ayar-455017227/' target='_black' rel='noopener noreferrer'>
                            LinkedIn
                        </Footer.Link>
                        <Footer.Link href='https://github.com/MuratAyar' target='_black' rel='noopener noreferrer'>
                            GitHub
                        </Footer.Link>
                    </Footer.LinkGroup> 
                    </div>
                    <div>
                       <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target='_black' rel='noopener noreferrer'>
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href='#' target='_black' rel='noopener noreferrer'>
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup> 
                    </div>
                    

                </div>
            </div> 
            <Footer.Divider />
            <div className='w-full sm:flex sm:item-center sm:justify-between'>
                <Footer.Copyright href='#' by="Murat's blog" year={new Date().getFullYear()} />
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='https://www.linkedin.com/in/murat-ayar-455017227/' icon={BsLinkedin} />
                    <Footer.Icon href='https://github.com/MuratAyar' icon={BsGithub} />
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsTwitter} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                </div>
            </div>
            
        </div>
    </Footer>
  )
}
