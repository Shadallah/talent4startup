import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone, GiPerson,GiAbacus, GiHouse, GiPlayerBase } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/passportPhoto.JPG"}
              alt="Abdullahi Ibrahim"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title=" Abdullahi Ibrahim">
              Abdullahi Ibrahim
            </h1>

            <p className="title">Software Developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="olaideibrahim36@gmail.com" className="contact-link">
                  olaideibrahim36@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+2348188435783" className="contact-link">
                  +(234)81-37767005
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiHouse/>
              </div>


              <div className="contact-info">
                <p className="contact-title">GitHub</p>

                <a href="https://github.com/Shadallah" className="Repo">
                  GitHub REPO
                </a>

              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiAbacus/>
                <ion-icon name="location-outline"></ion-icon>
              </div>


              <div className="contact-info">
                <p className="contact-title">Hobby</p>

                <time text="Critical Thinking/Researching">Critical Thinking</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Challenge Ring Road Ibadan, Nigeria</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.npmjs.com/package/react" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside