import './About.css'
import React from 'react'

export const About = () => {
    return <section className='about_container'>
        <div className='about_content'>
            <img className='about_image' src="konstruksi4.png" alt="" />
            <div className='about_description'>
                <h2 className='about_title'>About Us</h2>
                <p>
                    PT. Cakra Perkasa Jayamulia, a part of Cakra Group, was established in October 1991 in Banjarmasin, South Kalimantan. Initially serving the oil, gas, and mining industries, the company has evolved into a conglomerate of five companies and two sub-production units accross Kalimantan.
                </p>
                <p>
                    Cakra Group operates in various sectors such as construction, supply, industry, and repair services. With strong commitment, the company has strengthened its resources and has been able to execute high-technology and high-difficulty jobs successfully.
                </p>
                <button className='about_button'>Read More</button>

            </div>
        </div>
    </section>
}