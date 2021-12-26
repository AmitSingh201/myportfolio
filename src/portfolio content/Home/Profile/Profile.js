import React from 'react'
import './Profile.css'
import Typical from 'react-typical'


export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                      <div className="colz-icon">
                        <a href="https://www.linkedin.com/in/amit-singh-09b6051aa/">
                        <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href="/">
                        <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="https://www.instagram.com/https.amitsingh/">
                        <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCU1P-ZPSb7cFKBxxFdVZ8vQ">
                        <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="/">
                        <i className="fa fa-twitter"></i>
                        </a>
                    </div>    
                    </div>
                    <div className="profile-detail-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I Am <span className="highlighted-text">Amit</span>
                        </span>
                    </div>
                    <div className="profile-detail-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                           {" "}
                         <Typical 
                         loop={Infinity}
                         steps={[
                                 "Full Stack Developer", 1000,
                                 "Rect Js Developer😎", 1000,
                                 "UI & UX", 1000,
                                 "PhotoShop", 1000,
                                //  "Reactjs developer😎", 1000,
                                //  "see you😎", 1000,
                                //  "bye😎", 1000,
                        ]}
                         />
                       </h1>
                            <span className="profile-role-tagline">
                                Amit of building application with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="Final resume.pdf" download='Amit Final resume.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                 <div className="profile-picture-background">
                   
                 </div>
                </div>
            </div>
        </div>
        
    )
}
