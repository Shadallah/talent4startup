import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University school of Ilorin"
            date="2014 — 2018"
            description="Studied chemistry in relation to computational chemistry, diven deep to bring out the nitty-gritty of  chemisty to the nature and natural resources."
          />
          <TimelineItem
            title="Wootlab Technology Innovation Hub"
            date="2019 — 2020"
            description="Android Development with Java setup Firebase database"
          />

          <TimelineItem
            title="CyberSecurity Management"
            date="2018 — 2019"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          />

          <TimelineItem
            title="Federal Government Computer Youth Center"
            date="2012 — 2013"
            description="Acquired the basic computer packages and tools i.e Microsoft suite, Corel Draw and Adobe PageMaker & more.."
          />
          
          <TimelineItem
            title="Reliance Infosystems Limited"
            date="2020 — 2021"
            description="Trainer on Microsoft Power Platforms, Cloud Services, Microsoft ERP Solutions (Dynamics 365 FnO and Sales) then Window Server and SAP "
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Creative director"
            date="2015 — Present"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Art director"
            date="2013 — 2015"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Web designer"
            date="2010 — 2013"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="PowerPlatform Development" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="Azure Cloud Infrastructure" value={50} />
          <SkillItem title="Social Media Marketing" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
