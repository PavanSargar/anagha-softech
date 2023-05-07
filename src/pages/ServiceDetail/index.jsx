/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import Wrapper from "../../libs/Wrapper";
import Button from "../../libs/Button/Button";

import BANNERIMG from "../../assets/images/service-detail.png";
import ITGUYIMG from "../../assets/images/itguy.svg";
import IMGICON from "../../assets/icons/img-icon.svg";
import styles from "./index.module.css";
import ContactBanner from "../../components/ContactBanner";
import { useParams } from "react-router-dom";

const mobileAppDevelopment = {
  title: "Mobile App Development",
  description: `Revolutionize Your Business with Tailored Mobile Applications That Help You Stand out `,
  ourProcess: `At Anagha Softech, our experts follow a comprehensive and detail-oriented approach to mobile app development, ensuring the highest quality standards are met. With years of combined experience in mobile app development, our experts understand the nitty-gritty aspects of delivering desired results, even for complex requirements. We collaborate closely with clients to understand their unique requirements, design intuitive user interfaces, develop robust functionality, and conduct thorough testing to deliver cutting-edge mobile apps that drive user engagement and business growth.`,
  technologies: {
    title: "Languages we use",
    techs: [
      {
        name: ".Net, Microsoft",
        description: `We can leverage the power of .Net and Microsoft technologies to build scalable, high-performance, and secure mobile apps for various industries.`,
      },
      {
        name: "Dynamics CRM",
        description: `Our experts can help you streamline customer relationship management with mobile apps built on the robust Dynamics CRM platform, enhancing customer engagement and driving business growth.`,
      },
      {
        name: "PHP",
        description:
          "We focus on creating dynamic and feature-rich mobile applications using the versatile PHP scripting language, known for its flexibility and compatibility across platforms.",
      },
      {
        name: "JAVA",
        description: `With Anagha Softech, harness the power of Java to develop secure, high-performance, and portable mobile apps that cater to diverse user requirements and run seamlessly on multiple devices.`,
      },
      {
        name: "MEAN/MERN",
        description: `Utilize the efficiency of the MEAN (MongoDB, Express, Angular, Node.js) and MERN (MongoDB, Express, React, Node.js) stacks to build innovative, full-stack mobile applications with rapid development and deployment capabilities.`,
      },
      {
        name: "WordPress",
        description: `Our developers can develop mobile apps integrated with WordPress, the world's most popular content management system, to ensure seamless content updates and easy management.`,
      },
      {
        name: "OpenCart",
        description: `We can design and develop mobile apps for e-commerce platforms using OpenCart, a powerful and user-friendly system that simplifies online store management.`,
      },
      {
        name: "MySQL",
        description: `Our expertise includes implementing robust MySQL databases in your mobile apps to enable efficient data management, fast performance, and reliable data storage`,
      },
    ],
  },
};

const webDevelopmentData = {
  title: "Web Development",
  description: `Elevate Your Online Presence and Achieve All Your Business Goals with a Customized, High-Performance Website`,
  ourProcess: `Our web development experts adhere to a meticulous and detail-oriented process, ensuring your website meets the highest quality standards. Our expert team has access to best-in-class languages and technologies which helps us deliver outstanding websites that drive user engagement and business growth. We collaborate closely with clients to understand their unique requirements, design captivating user interfaces, develop seamless front-end and back-end functionality, and perform thorough testing. Combining our expertise with a client-centric approach, we deliver top-notch web development solutions that drive user engagement, enhance customer experiences, and facilitate business growth.`,
  technologies: {
    title: "Languages & Technologies We Use",
    techs: [
      {
        name: "HTML & CSS",
        description: `We utilize the core building blocks of web development, HTML and CSS, to create visually appealing and responsive websites that cater to diverse user needs.`,
      },
      {
        name: "JavaScript & jQuery",
        description: `Our experts leverage the power of JavaScript and jQuery to develop interactive and feature-rich websites with smooth animations and seamless user experiences.`,
      },
      {
        name: "PHP & Laravel",
        description:
          "We utilize the flexibility and versatility of PHP and the Laravel framework to build scalable, secure, and high-performance web applications.",
      },
      {
        name: "Node.js & Express",
        description: `We know how to implement the fast and efficient Node.js runtime environment and Express web framework to develop high-performance, server-side web applications.`,
      },
      {
        name: "React & Angular",
        description: `For developing dynamic and responsive web applications, our developers use leading JavaScript libraries and frameworks like React and Angular to create powerful user interfaces.`,
      },
      {
        name: "WordPress & WooCommerce",
        description: `Our development team builds and manages content-driven websites with WordPress and creates e-commerce solutions with the WooCommerce plugin.`,
      },
      {
        name: "Database Solutions - MySQL & MongoDB",
        description: `We can help you integrate robust and scalable database solutions using MySQL and MongoDB, ensuring efficient data management, reliable storage, and fast performance.`,
      },
      {
        name: "Python & Django",
        description: `Our team harnesses the flexibility and readability of Python, paired with the Django web framework, to develop feature-rich, high-performance web applications that are easy to maintain and scale.`,
      },
    ],
  },
};

const cyberSecurityData = {
  title: "Cyber Security",
  description: `Safeguard Your Digital Assets with Comprehensive Cybersecurity Solutions`,
  ourProcess: `With a deep understanding of cyber security, Anagha Softech delivers top-tier cybersecurity solutions that protect your digital assets, maintain compliance, and foster business growth in a secure environment. Our cybersecurity experts follow a multi-layered, proactive approach to protect your digital assets against ever-evolving cyber threats. We work closely with clients to understand their unique security requirements, assess potential vulnerabilities, develop tailored security strategies, and provide ongoing monitoring and support to maintain a secure digital environment.`,
  technologies: {
    title: "Core Cybersecurity Services",
    techs: [
      {
        name: "Network Security",
        description: `We can implement advanced network security measures to safeguard your organization's critical infrastructure, including firewalls, intrusion detection systems, and secure network design.`,
      },
      {
        name: "Endpoint Security",
        description: `Our experts can help you protect devices within your network, such as laptops, desktops, and mobile devices, with comprehensive endpoint security solutions, including antivirus, antimalware, and device management tools.`,
      },
      {
        name: "Application Security",
        description:
          "Secure your web applications from potential threats with our thorough vulnerability assessments, implementing secure coding practices, and deploying robust security solutions.",
      },
      {
        name: "Data Security & Encryption",
        description: `Guard your sensitive data with the help of our robust security measures, including encryption, secure data storage, and data loss prevention strategies.`,
      },
      {
        name: "Security Incident & Event Management (SIEM)",
        description: `We will monitor your network and systems in real-time with SIEM solutions, detecting and responding to potential security incidents quickly and effectively.`,
      },
      {
        name: "Compliance & Risk Management",
        description: `We’ll ensure compliance with industry-specific regulations and standards while effectively managing and mitigating cybersecurity risks.`,
      },
      {
        name: "Security Awareness & Training",
        description: `Empower your employees to become the first line of defense against cyber threats with our comprehensive security awareness and training programs, covering best practices, phishing prevention, and secure password management.`,
      },
    ],
  },
};

const staffingSolutionsData = {
  title: "Staffing Solutions",
  description: `Our Tailored Staffing Solutions for Enterprises to Provide Competent, Temporary, and Permanent Personnel to Augment Your Workforce`,
  ourProcess: `We believe in providing personalized staffing solutions that cater to each client's specific needs. Our experts collaborate closely with you to gain a deep understanding of your organization's culture, objectives, and staffing requirements. We use a rigorous screening process, tapping into our vast talent network and leveraging industry insights to identify and deliver the most suitable candidates for your organization. We help you build a high-performing team that drives growth and success while enhancing your company's productivity and efficiency.`,
  technologies: {
    title: "Services We Provide",
    techs: [
      {
        name: "Temporary Staffing",
        description: `We provide temporary staffing solutions to help you manage short-term needs, seasonal demands, or special projects, ensuring continuity and efficiency in your business operations.`,
      },
      {
        name: "Contract-to-Hire",
        description: `Our contract-to-hire services allow you to evaluate a potential employee's skills and cultural fit before making the offer, thereby reducing hiring risks.`,
      },
      {
        name: "Direct Hire",
        description:
          "We specialize in finding and placing top talent for permanent positions, utilizing our vast network and expert recruitment strategies to identify the best candidates for your organization.",
      },
      {
        name: "Executive Search",
        description: `Our executive search services focus on finding exceptional leaders to drive your organization's growth and success. We leverage our industry expertise and extensive network to identify and attract top-tier candidates.`,
      },
      {
        name: "Project-Based Staffing",
        description: `We offer project-based staffing solutions to help you assemble the right team for a specific project or initiative. This ensures access to the necessary skills and expertise for successful project completion.`,
      },
      {
        name: "Specialized Industry Solutions",
        description: `Our team has in-depth knowledge and experience in various industries, enabling us to provide specialized staffing solutions that address your unique challenges.`,
      },
      {
        name: "Remote Staffing Solutions",
        description: `Our remote staffing solutions enable you to access a diverse pool of talent worldwide, offering flexibility and cost savings while maintaining the highest levels of productivity and efficiency.`,
      },
      {
        name: "On-site Staffing Support",
        description: `We offer on-site staffing support to help you manage your workforce more effectively, ensuring seamless collaboration and communication between your team members.`,
      },
    ],
  },
};

const ServiceDetail = () => {
  const [serviceData, setServiceData] = useState({});
  const { id } = useParams();

  const webDevelopment = id.split("-").join("") === "webdevelopment";
  const mobileDevelopment = id.split("-").join("") === "mobileappdevelopment";
  const cyberSecurity = id.split("-").join("") === "cybersecurity";
  const staffingSolutions = id.split("-").join("") === "staffingsolutions";

  console.log(id.split("-").join(""));

  useEffect(() => {
    if (mobileDevelopment) setServiceData(mobileAppDevelopment);
    if (webDevelopment) setServiceData(webDevelopmentData);
    if (cyberSecurity) setServiceData(cyberSecurityData);
    if (staffingSolutions) setServiceData(staffingSolutionsData);
  }, []);

  return (
    <>
      <div className={`${styles.container} pt-5`}>
        <Wrapper>
          <div
            className={`${styles.heading} d-flex align-items-center gap-5 justify-content-between`}
          >
            <div>
              <p className="p3 fw-bold text-pink">OVERVIEW</p>
              <h3 className="H2 t-dark ">{serviceData?.title}</h3>
            </div>

            <div className={`${styles.description} ms-5 ps-5`}>
              <p className="p-xl text-grey">{serviceData?.description}</p>
              <Button fixed className="bg-blue">
                Contact us today
              </Button>
            </div>
          </div>
          <div className={`${styles.banner}`}>
            <Image fluid src={BANNERIMG} alt="" />
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div
          className={`${styles.summary} d-flex align-items-center justify-content-between gap-5`}
        >
          <Image src={ITGUYIMG} alt="" />
          <div className={`${styles["summary-description"]}`}>
            <h3 className="H3 t-primary mb-4 ">Our Process</h3>
            <p className="p-xl text-grey">{serviceData?.ourProcess}</p>
          </div>
        </div>

        <div className={`${styles.solutions} mt-5 pt-5`}>
          <p className="p3 fw-bold text-center text-pink">SOLUTIONS</p>
          <h3 className="H2 t-dark text-center ">
            {serviceData?.technologies?.title}
          </h3>

          <div
            className={`${styles.cards} d-flex align-items-center justify-content-center gap-4 flex-wrap`}
          >
            {serviceData?.technologies?.techs?.map((item, i) => (
              <Card key={i} name={item?.name} description={item?.description} />
            ))}
          </div>
        </div>
      </Wrapper>
      <ContactBanner />
    </>
  );
};

export default ServiceDetail;

const Card = ({ name, description }) => {
  return (
    <div className={`${styles.card} d-flex align-items-start gap-3`}>
      <div className={`${styles["card-img-container"]} rounded-circle`}>
        <Image src={IMGICON} alt="" />
      </div>
      <div className={`${styles["card-description"]}`}>
        <h6 className="H6 t-dark">{name}</h6>
        <p className="text-grey p1">{description}</p>
      </div>
    </div>
  );
};
