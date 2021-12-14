import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <a href="/">
                        <i className="fa fa-facebook-square"></i>
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
                    <div className="profile-detail-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I Am <span className="highlighted-text">Amit</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
