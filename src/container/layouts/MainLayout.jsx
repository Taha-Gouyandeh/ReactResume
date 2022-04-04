import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dir } from "../redux/Action/Diraction";

const MainLayout = () => {
    const diract = useSelector((state) => state.Diraction);
    const dispatch = useDispatch();

    console.log(diract);

    let dir, home, resume, about, contact;
    let hi, name, moreAbout;
    let letAbout, aboutText;
    let profile, profileText;
    let fullName, fullNameText;
    let birth, birthText;
    let job;
    let goGit;
    let skills;
    let moreResume;
    let maskan, maskanText, maskanText2;
    let education, bachelor, bachelorText, bachelorText2;
    let where, email, phone;

    if (diract) {
        dir = "ltr";
        home = "home";
        resume = "resume";
        about = "about";
        contact = "contact";
        hi = "hi";
        name = "Im Mohammad taha gouyandeh.b";
        moreAbout = "More Aboute me";
        letAbout = "Let me introduce myself";
        aboutText =
            "im mohammad taha gouyandeh barhaghi simple programmer and I live in iran (tehran).";
        profile = "PROFILE:";
        profileText =
            "I born in 2000 in iran (tehran) and i go to payamnoor univercity in tehran.";
        fullName = "FULLNAME:";
        fullNameText = "Mohammad Taha Gouayndeh.B";
        birth = "BIRTH DATE:";
        birthText = "April 17, 2000";
        job = "JOB";
        skills='SKILLS'
        goGit = "go to my repository on githube";
        moreResume = "More of my credentials.";
        maskan = "Maskan Bank Internship";
        maskanText = "Maskan Bank Information Technology";
        maskanText2 =
            "I worked as a software engineer Internship in Maskan Bank IT for two months";
        education = "Education";
        bachelor = "Bachelor Degree";
        bachelorText = "Payam Nur University of Tehran";
        bachelorText2 =
            "In 2018, I went to Payamnoor University in Tehran. One of the reasons I went to this university was to study in my hometown and go to my favorite field, which was computer. In the world, this university has a better reputation than some Iranian universities.";
        where = "WHERE TO FIND ME";
        email = "EMAIL ME AT";
        phone = "my phone number";
    } else {
        dir = "rtl";
        home = "خانه";
        resume = "رزومه";
        about = "درباره من";
        contact = "ارتباط با من";
        hi = "سلام";
        name = "من محمد طاها گوینده هستم";
        moreAbout = "درباره من";
        letAbout = "معرفی خودم";
        aboutText =
            "من یک برنامه نویس تازه کار فرانتند و ریئکت هستم و در تهران زندگی میکنم.";
        profile = "پروفایل:";
        profileText =
            "ن متولد سال 1379 در ایران(تهران) هستم و در دانشگاه پیامنور استان تهران مشغول به تحصیل می باشم..";
        fullName = "نام خانوادگی:";
        fullNameText = "محمد طاها گوینده";
        birth = "تاریخ تولد:";
        birthText = "1379/01/29";
        job = "شغل";
        skills="مهارت ها"
        goGit = "ریپازیتوری های گیتهاب من";
        moreResume = "تجارب کاری من";
        maskan = "کاراموزی بانک مسکن";
        maskanText = "فناوری اطالاعات بانک مسکن";
        maskanText2 =
            "من به مدت دو ماه به عنوان کاراموز مهندس نرم افزار در بخش تست نرم افزار دایره ی فناوری اطلاعات بانک مسکن مشغول به کار بودم";
        education = "تحصیلات";
        bachelor = "لیسانس";
        bachelorText = "پیامنور تهران شمال";
        bachelorText2 =
            "من از سال 97 به دانشگاه پیامنور استان تهران میروم از دلایل انتخاب این دانشگاه برای من تحصیل در شهر خودم و رشته ی مورد علاقم که کامپیوتر هست و اعتبار دانشگاه بود.";
        where = "محل زندگی";
        email = "ایمیل من";
        phone = "شماره تماس من";

    }

    return (
        <div dir={dir}>
            <header>
                
                <nav
                    className="navbar navbar-expand-md navbar-dark fixed-top shadow"
                    id="navbar"
                >
                    <div className="container text-light">
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#nav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="nav">
                            <ul className="navbar-nav ">
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#Home">
                                        {home}
                                    </a>{" "}
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#About">
                                        {about}
                                    </a>{" "}
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#Resume">
                                        {resume}
                                    </a>{" "}
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="#Contact">
                                        {contact}
                                    </a>{" "}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button
                                onClick={() => dispatch(Dir(false))}
                                className="btn text-light me-auto"
                                href=""
                            >
                                {" "}
                                فارسی
                            </button>
                            <button
                                onClick={() => dispatch(Dir(true))}
                                className="btn text-light me-auto"
                                href=""
                            >
                                {" "}
                                English
                            </button>
                        </div>
                    </div>
                </nav>
                <div
                    className="intro-overlay text-light scrollspy-example"
                    id="Home"
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example2"
                    data-bs-offset="0"
                    tabindex="0"
                >
                    <div className="contaier" id="intro">
                        <p>{hi}</p>
                        <h2> {name} </h2>
                        <p>|React Developer|</p>
                        <a
                            href="#About"
                            className="btn border border-3 text-light btn-outline-dark"
                        >
                            {moreAbout}
                            <span className="fa fa-angle-down"></span>
                        </a>
                    </div>
                    <div id="social" className="mt-5">
                        <a
                            href="https://www.instagram.com/taha_g_b/"
                            className="text-light ms-2"
                        >
                            <span className="fa fa-instagram"></span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/taha-goyandeh-292b99202/"
                            className="text-light ms-2"
                        >
                            <span className="fa fa-linkedin"></span>
                        </a>{" "}
                    </div>
                </div>
            </header>
            <a className="fa fa-arrow-circle-up fa-3x"id="backToTop" href="#Home"></a>
            <main>
                <div className="container  px-5" id="About">
                    <div className="text-center">
                        <h4 className="text-danger mt-5">{about}</h4>
                        <p>
                            <strong>{letAbout} </strong>
                        </p>
                    </div>
                    <div className="row align-items-center ">
                        <div className="col-sm-2 ms-sm-5 text-center">
                            <img
                                className=""
                                id="profile-pic"
                                src="images/profile-pic.jpg"
                                alt="profile picture"
                            />
                        </div>
                        <div className="col-sm-7">
                            {aboutText}
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <p>
                                <strong>{profile}</strong>{" "}
                            </p>
                            <p>
                                <small>
                                   {profileText}
                                </small>
                            </p>

                            <strong>{fullName} </strong>
                            <p>
                                <small>{fullNameText} </small>
                            </p>

                            <strong>{birth}:</strong>
                            <p>
                                <small>{birthText} </small>{" "}
                            </p>

                            <strong>{job} </strong>
                            <p>
                                <small>React Developer</small>
                            </p>

                            <strong>WEBSITE:</strong>
                            <p>
                                <small>
                                    <a href="https://github.com/Taha-Gouyandeh">
                                        https://github.com/Taha-Gouyandeh
                                    </a>
                                </small>
                            </p>

                            <strong>GMAIL:</strong>
                            <p>
                                <small>
                                    <a href="mailto:goyandeht@gmail.com">
                                        gouyandeht@gmail.com
                                    </a>
                                </small>
                            </p>
                        </div>

                        <div className="col-sm-6">
                            <p>
                                <strong>{skills} </strong>{" "}
                            </p>

                            <strong>HTML CSS</strong>
                            <div className="progress my-3">
                                <div
                                    className="progress-bar bg-secondary"
                                    style={{ width: "70%" }}
                                >
                                    {" "}
                                    70%
                                </div>
                            </div>
                            <strong>Bootstrap</strong>
                            <div className="progress my-3">
                                <div
                                    className="progress-bar bg-secondary"
                                    style={{ width: "60%" }}
                                >
                                    {" "}
                                    60%
                                </div>
                            </div>
                            <strong>JavaScript</strong>
                            <div className="progress my-3">
                                <div
                                    className="progress-bar  bg-secondary"
                                    style={{ width: "35%" }}
                                >
                                    {" "}
                                    35%
                                </div>
                            </div>
                            <strong>React</strong>
                            <div className="progress my-3">
                                <div
                                    className="progress-bar bg-secondary"
                                    style={{ width: "30%" }}
                                >
                                    {" "}
                                    30%
                                </div>
                            </div>
                            <strong>Git</strong>
                            <div className="progress my-3">
                                <div className="progress-bar w-50 bg-secondary">
                                    {" "}
                                    50%
                                </div>
                            </div>
                        </div>

                        <a
                            className="btn btn-secondary"
                            href="https://github.com/Taha-Gouyandeh?tab=repositories"
                        >
                            {goGit}
                            <span className="fa fa-github"></span>
                        </a>
                    </div>
                </div>

                <div className="py-5 mt-5" id="Resume">
                    <div className="container px-5 " id="InResume">
                        <div className="row text-center">
                            <strong className="text-danger">{resume} </strong>
                            <h4>{moreResume} .</h4>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-3 mb-4">
                                <strong>{maskan} </strong>
                            </div>

                            <div className="col-sm-1 d-none d-sm-grid ">
                                <div
                                    className="timeline-ico text-center"
                                    id="workImg"
                                >
                                    <span className=" fa fa-briefcase"></span>
                                </div>
                            </div>

                            <div className="col-sm-7 ms-3">
                                <storag>
                                    {maskanText}
                                </storag>
                                <div className="my-2" id="wrap-row"></div>
                                <p>
                                    {maskanText2}
                                </p>
                            </div>
                        </div>

                        <hr />
                        <div className="text-center">
                            <strong className="text-danger">{education} </strong>
                        </div>

                        <div className="row mt-4">
                            <div className="col-sm-3 mb-4">
                                <strong>{bachelor} </strong>
                            </div>

                            <div className="col-sm-1 d-none d-sm-grid ">
                                <div
                                    className="timeline-ico text-center"
                                    id="workImg"
                                >
                                    <span className=" fa fa-graduation-cap"></span>
                                </div>
                            </div>

                            <div className="col-sm-7 ms-3">
                                <storag>{bachelorText} </storag>
                                <div className="my-2" id="wrap-row"></div>
                                <p>
                                   {bachelorText2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="bg-dark">
                    <div className="container" id="Contact">
                        <div className="row pt-5 mb-4">
                            <div className="col-4 text-center text-light">
                                <span className=" fa fa-map-marker fa-2x"></span>
                                <p className="text-danger">{where}</p>
                                <p>Iran</p>
                                <p>tehran</p>
                            </div>
                            <div className="col-4 text-center text-light">
                                <span className=" fa fa-envelope fa-2x"></span>
                                <p className="text-danger">{email}</p>
                                <p>
                                    <a href="mailto:goyandeht@gmail.com">
                                        goyandeht@gmail.com
                                    </a>
                                </p>
                                <p>
                                    <a href="mailto:gouyandeht@gmail.com">
                                        gouyandeht@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="col-4 text-center text-light">
                                <span className="  fa fa-phone fa-2x"></span>
                                <p className="text-danger">{phone}</p>
                                <p>
                                    <a href="tel:+98124366419">+989124366419</a>
                                </p>
                                <p>
                                    <a href="tel:+989109191036">
                                        +989109191036
                                    </a>
                                </p>
                            </div>
                        </div>

                        <span className="text-light ms-5">©Copyright Taha</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
