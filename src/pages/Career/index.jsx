/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import axios from "axios";

import Wrapper from "../../libs/Wrapper/index";
import CAREERIMG from "../../assets/images/career-img.png";
import LOADERICON from "../../assets/icons/loader.svg";

import { BiStopwatch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { TbClockHour4 } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import Button from "../../libs/Button/Button";
import styles from "./index.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Config from "../../../Config";

const Career = ({ animation }) => {
  const [jobDescriptions, setJobDescriptions] = useState([]);

  const getJobDescriptions = async () => {
    var config = {
      method: "get",
      url: `${Config.backendUrl}/jd/list`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios(config)
      .then(function (response) {
        setJobDescriptions(response.data?.body);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getJobDescriptions();
  }, []);
  return (
    <div className={`${styles.container} pt-5 mt-3`}>
      <Wrapper>
        <Row
          data-aos={animation}
          className="align-items-center justify-content-between flex-wrap "
        >
          <Col sm={12} md={6}>
            <div className={`${styles.heading} mb-4 `}>
              <p className="p1 fw-bold text-pink">CAREER OPPORTUNITY</p>
              <h3 className="H2 t-primary mb-4 ">
                Join us to build a safer digital world for growing our
                businesses
              </h3>
              <p className="text-grey p1">
                Our focus on simplified technology allows us to provide
                exceptional delivery to our clients.
              </p>
            </div>
          </Col>
          <Col className="ps-5" sm={12} md={6}>
            <Image fluid src={CAREERIMG} alt="" />
          </Col>
        </Row>

        <div data-aos={animation} className={`${styles.subheading} mb-4 mt-5`}>
          <p className="p1 fw-bold text-center text-pink">BENEFITS</p>
          <h3 className="H3 t-dark mb-4 text-center ">
            Let's see our benefits
          </h3>
          <p className="text-grey text-center p1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has.
          </p>
        </div>

        <div
          data-aos={animation}
          className={`${styles["benefit-cards"]} mt-5 flex-wrap d-flex justify-content-between align-items-center gap-5`}
        >
          <BenefitCard />
          <div className={`${styles["vertical-rule"]}`} />
          <BenefitCard />
          <div className={`${styles["vertical-rule"]}`} />

          <BenefitCard />
        </div>
      </Wrapper>

      <div data-aos={animation} className={`${styles["job-opening"]}`}>
        <div className={`${styles["job-heading"]}`}>
          <h3 className="H3 t-dark mb-4 text-center ">Job Opening</h3>
          <p className="text-grey text-center p-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has.
          </p>
        </div>
        {jobDescriptions?.length ? (
          <>
            <div
              className={`${styles.tabs} d-flex align-items-center justify-content-center gap-2`}
            >
              <Button className="bg-blue">All</Button>
              <Button className="transparent">UI/UX</Button>
              <Button className="transparent">Developer</Button>
              <Button className="transparent">Other</Button>
            </div>

            <div
              className={`${styles.jobs} mt-5 d-flex justify-content-around align-items-center gap-4 flex-wrap`}
            >
              {jobDescriptions?.map((item) => (
                <JobCard
                  category={item?.category}
                  title={item?.title}
                  description={item?.shortDescription}
                  jobPlace={item?.jobPlace}
                  jobType={item?.jobType}
                  key={item?._id}
                  link={item?._id}
                />
              ))}
              {/* <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard /> */}
            </div>

            <div className="mt-5 d-flex align-items-center justify-content-center ">
              <Button className="bg-blue">
                {" "}
                <Image
                  height={15}
                  className="mb-1"
                  src={LOADERICON}
                  alt=""
                />{" "}
                Load More
              </Button>
            </div>
          </>
        ) : (
          <h6 className="H6 text-center t-primary">
            There are no Jobs right now
          </h6>
        )}
      </div>
    </div>
  );
};

export default Career;

const BenefitCard = () => {
  return (
    <div className={`${styles["benefit-card"]}`}>
      <BiStopwatch size={35} color="000" />
      <h6 className="p-lg my-3 t-primary fw-bold ">Top salary & equity</h6>
      <p className="text-grey p1">
        A 7-days training program designed to boost your strength & endurance
        over the course of a week.
      </p>
    </div>
  );
};

const JobCard = ({ description, category, title, jobType, jobPlace, link }) => {
  return (
    <Link to={`${link}`}>
      <div className={`${styles["job-card"]}`}>
        <div className="d-flex align-items-center gap-2">
          <h6 className="p-lg t-dark fw-bold">{title}</h6>
          <span
            className={`${styles["job-category"]} d-flex align-items-center`}
          >
            <RxDotFilled size={18} color="000" /> {category}
          </span>
        </div>
        <p className="p1 mt-3 text-grey">{description.slice(0, 63)}...</p>
        <div
          className={`${styles["job-features"]} mt-4 pt-2 d-flex align-items-center gap-5`}
        >
          <span className="d-flex align-items-center ">
            <GrLocation className="me-2" size={20} color="#667790" />
            {jobPlace}
          </span>
          <span className="d-flex align-items-center ">
            <TbClockHour4 className="me-2" color="#667790" size={22} />
            {jobType}
          </span>
        </div>
      </div>
    </Link>
  );
};
