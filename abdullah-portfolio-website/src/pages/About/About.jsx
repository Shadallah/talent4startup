/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The design is cutting-edge and high-quality, created at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "Developing High-quality Softwares that addresses customer pain point."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Business Application",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      <strong>Career Objective</strong> To add immense value to humanity and any organization, I am opportune to serve or work. By the special 
grace of God, I intend to achieve this through hard work, determination, teamwork and Honesty to 
carryout any responsibility assigned to me within the dynamic environment of any platform I might work 
or serve. 
      </p>

      <p>
        My job is to build Software so that it is functional and user-friendly but at the same time attractive.
        Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your message and identity in the most creative way. I created Application for many famous brand companies.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--- testimonials --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
- clients --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="https://univelcity.com/">
            <img src="images/univelcit-logo-nbg.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="https://greenhubafrica.com/">
            <img src="images/GreenersHub-logo-nbg.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="https://mssnigeria.org/">
            <img src="images/mssn-logo-nbg.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="reliance-logo.jpg">
            <img src="images/reliance-logo-nbg.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item" >
          <a href="#">
            <img src="images/Cloudware_logo-nbg.png" alt="client logo"/>
          </a>
        </li>


        <li className="clients-item">
          <a href="#">
            <img src="images/mcan-nbg.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About