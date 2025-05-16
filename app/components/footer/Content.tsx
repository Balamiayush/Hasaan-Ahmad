"use client"
import React from 'react'
import Link from 'next/link'
export default function Content() {
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-[90vh] lg:h-full w-full flex flex-col justify-between'>
        <Section2 />
        <Nav />
    </div>
  )
}

const Section2 = () => {
    return (
        <div className='flex justify-center items-center h-[50vh] w-full lg:h-screen'>
            <h1 className='text-[14vw] leading-[0.8] mt-10 text-white font-bold'>Nexus Core</h1>
            <p className='bg-black text-white p-2 rounded-sm'>©copyrig  ht</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 '>
            <div className='flex flex-col gap-2'> 
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <Link href="/">
                    <p>Home</p>
                    <p>Home</p>
                </Link>
                <Link href="/projects">
                    <p>Projects</p>
                    <p>Projects</p>
                </Link>
                <Link href="/our-mission">
                    <p>Our Mission</p>
                    <p>Our Mission</p>
                </Link>
                <Link href="/contact-us">
                    <p>Contact Us</p>
                    <p>Contact Us</p>
                </Link>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
                <Link href="/news">
                    <p>News</p>
                </Link>
                <Link href="/learn">
                    <p>Learn</p>
                </Link>
                <Link href="/certification">
                    <p>Certification</p>
                </Link>
                <Link href="/publications">
                    <p>Publications</p>
                </Link>
            </div>
        </div>
    )
}
