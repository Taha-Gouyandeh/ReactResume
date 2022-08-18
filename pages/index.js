import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowCircleUp,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState("en");

  let dir, home, resume, portfolio, about, contact;
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
  let taban, tabanText, tabanText2;
  let education, bachelor, bachelorText, bachelorText2;
  let where, email, phone, forMore;

  if (lang == "en") {
    dir = "ltr";
    home = "home";
    resume = "resume";
    portfolio = "portfolio";
    about = "about";
    contact = "contact";
    forMore = "and for more...";
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
    skills = "SKILLS";
    goGit = "go to my repository on githube";
    moreResume = "More of my credentials.";
    maskan = "Maskan Bank Internship";
    maskanText = "Maskan Bank Information Technology";
    maskanText2 =
      "I worked as a software engineer Internship in Maskan Bank IT for two months";
    taban = "Taban Shahr";
    tabanText = "Taban Shahr programing Department";
    tabanText2 =
      "From June 2022 until now, I have been working at Taban Shahr programming company as a React and ReactNative programmer.";
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
    portfolio = "نمونه کار";
    about = "درباره من";
    contact = "ارتباط با من";
    forMore = "نمونه کار های دیگر در...";
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
    skills = "مهارت ها";
    goGit = "ریپازیتوری های گیتهاب من";
    moreResume = "تجارب کاری من";
    maskan = "کاراموزی بانک مسکن";
    maskanText = "فناوری اطالاعات بانک مسکن";
    maskanText2 =
      "من به مدت دو ماه به عنوان کاراموز مهندس نرم افزار در بخش تست نرم افزار دایره ی فناوری اطلاعات بانک مسکن مشغول به کار بودم";
    taban = "شرکت تابان شهر";
    tabanText = "دپارتمان برنامه نویسی";
    tabanText2 =
      "از خرداد ۱۴۰۰ تا کنون در شرکت برنامه نویسی تابان شهر به عنوان برنامه نویس React و ReactNative مشغول به کار هستم";
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
    <div dir={lang == "fa" ? "rtl" : "ltr"}>
      <Head>
        <title>taha Gouyandeh</title>
        <meta name="description" content="taha Gouyandeh" />
        <meta name="description" content="React ReactNative" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#About">
                    {about}
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#my-portfolio">
                    {portfolio}
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#Resume">
                    {resume}
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#Contact">
                    {contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => setLang("fa")}
                className="btn text-light me-auto"
                href=""
              >
                فارسی
              </button>
              <button
                onClick={() => setLang("en")}
                className="btn text-light me-auto"
                href=""
              >
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
          tabIndex="0"
        >
          <div className="contaier" id="intro">
            <p>{hi}</p>
            <h2> {name} </h2>
            <p>React {"&"} React Native Developer</p>
            <a
              href="#About"
              className="btn border border-3 text-light btn-outline-dark"
            >
              {moreAbout}
              <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </div>
          <div id="social" className="mt-5">
            <a
              href="https://www.instagram.com/taha_g_b/"
              className="text-light ms-2"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/taha-goyandeh-292b99202/"
              className="text-light ms-2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </header>
      <a id="backToTop" href="#Home">
        <FontAwesomeIcon icon={faArrowCircleUp} size={"3x"} />
      </a>
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
              <Image
                width={"100px"}
                height={'100px'}
                className=""
                id="profile-pic"
                src="/images/profile-pic.jpg"
                alt="profile picture"
              />
            </div>
            <div className="col-sm-7">{aboutText}</div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6">
              <p>
                <strong>{profile}</strong>
              </p>
              <p>
                <small>{profileText}</small>
              </p>

              <strong>{fullName} </strong>
              <p>
                <small>{fullNameText} </small>
              </p>

              <strong>{birth}:</strong>
              <p>
                <small>{birthText} </small>
              </p>

              <strong>{job} </strong>
              <p>
                <small>React Developer {"&"} React Native </small>
              </p>

              <strong>WEBSITE:</strong>
              <p>
                <small>
                  <Link href="https://github.com/Taha-Gouyandeh">
                    https://github.com/Taha-Gouyandeh
                  </Link>
                </small>
              </p>

              <strong>GMAIL:</strong>
              <p>
                <small>
                  <Link href="mailto:goyandeht@gmail.com">
                    gouyandeht@gmail.com
                  </Link>
                </small>
              </p>

              <strong>Linkedin:</strong>
              <p>
                <small>
                  <Link href="https://www.linkedin.com/in/taha-goyandeh-292b99202/">
                    https://www.linkedin.com/in/taha-goyandeh-292b99202/
                  </Link>
                </small>
              </p>
            </div>

            <div className="col-sm-6">
              <p>
                <strong>{skills} </strong>
              </p>

              <strong>HTML CSS Bootstrap</strong>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "70%" }}
                >
                  70%
                </div>
              </div>
              <strong>JavaScript {"&"} typeScript </strong>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
              <strong>React</strong>
              <div className="progress my-3">
                <div
                  className="progress-bar  bg-secondary"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>
              <strong>React Native</strong>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>
              <strong>NextJS</strong>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
              </div>
              <strong>Git</strong>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-secondary"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
              </div>
            </div>

            <div className="btn btn-secondary">
              <Link href="https://github.com/Taha-Gouyandeh?tab=repositories">
                <div>
                  {goGit}
                  <FontAwesomeIcon className="mx-2" icon={faGithub} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-5 mt-5" id="my-portfolio">
          <div className="container">
            <h3>{portfolio}</h3>
            <div className="row">
              <div className="col-md-4 p-4 col-6 pointer">
                <Link
                  href="http://binance.taha-gouyande.ir/"
                  className="card shadow-sm"
                >
                  <div className="card shadow">
                    <Image
                      width={"500px"}
                      height={"240px"}
                      className="card-img-top"
                      src="/images/binance.jpg"
                    />
                    <div className="card-body">
                      <div className="card-title">Binance</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 p-4 col-6 pointer ">
                <Link
                  href="http://toplearn.taha-gouyande.ir/"
                  className="card shadow-sm"
                >
                  <div className="card shadow">
                    <Image
                      width={"500px"}
                      height={"240px"}
                      className="card-img-top"
                      src="/images/toplearn.jpg"
                    />
                    <div className="card-body">
                      <div className="card-title">TopLearn</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 p-4 col-6 pointer">
                <Link href={"/Games"} className="card shadow-sm">
                  <div className="card shadow">
                    <Image
                      width={"500px"}
                      height={"240px"}
                      className="card-img-top"
                      src="/images/gamebg.png"
                    />
                    <div className="card-body">
                      <div className="card-title">Games</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 p-4 col-6 pointer">
                <Link
                  href="https://taha-gouyandeh.github.io/ZarinWebBootstrap/"
                  className="card shadow-sm"
                >
                  <div className="card shadow">
                    <Image
                      width={"500px"}
                      height={"240px"}
                      className="card-img-top"
                      src="/images/zarin.jpg"
                    />
                    <div className="card-body">
                      <div className="card-title">zarin pall</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 p-4 col-6 pointer">
                <Link
                  href="https://taha-gouyandeh.github.io/book-project/"
                  className="card shadow-sm"
                >
                  <div className="card shadow">
                    <Image
                      width={"500px"}
                      height={"240px"}
                      className="card-img-top"
                      src="/images/book.jpg"
                    />
                    <div className="card-body">
                      <div className="card-title">Book Detail</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 p-4 col-6 pointer">
                <Link
                  href="https://taha-gouyandeh.github.io/restaurant/"
                  className="card shadow-sm"
                >
                  <div className="card shadow">
                    <Image
                      width={"500px"}
                      height={"240px"}
                      className="card-img-top"
                      src="/images/restaurant.jpg"
                    />
                    <div className="card-body">
                      <div className="card-title">sass restaurant</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pointer">
              <Link href="https://github.com/Taha-Gouyandeh?tab=repositories">
                <div>{forMore}</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-5" id="Resume">
          <div className="container px-5 " id="InResume">
            <div className="row text-center">
              <strong className="text-danger">{resume} </strong>
              <h4>{moreResume} </h4>
            </div>
            <div className="row mt-4">
              <div className="col-sm-3 mb-4">
                <strong>{taban} </strong>
              </div>

              <div className="col-sm-1 d-none d-sm-grid ">
                <div
                  className="timeline-ico d-flex justify-content-center align-items-center "
                  id="workImg"
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
              </div>

              <div className="col-sm-7 ms-3">
                <storag>{tabanText}</storag>
                <div className="my-2" id="wrap-row"></div>
                <p>{tabanText2}</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-3 mb-4">
                <strong>{maskan} </strong>
              </div>

              <div className="col-sm-1 d-none d-sm-grid ">
                <div
                  className="timeline-ico d-flex justify-content-center align-items-center "
                  id="workImg"
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
              </div>

              <div className="col-sm-7 ms-3">
                <storag>{maskanText}</storag>
                <div className="my-2" id="wrap-row"></div>
                <p>{maskanText2}</p>
              </div>
            </div>

            <hr />
            <div className="text-center">
              <strong className="text-danger">{education}</strong>
            </div>

            <div className="row mt-4">
              <div className="col-sm-3 mb-4">
                <strong>{bachelor} </strong>
              </div>

              <div className="col-sm-1 d-none d-sm-grid ">
                <div
                  className="timeline-ico  d-flex justify-content-center align-items-center"
                  id="workImg"
                >
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
              </div>

              <div className="col-sm-7 ms-3">
                <storag>{bachelorText} </storag>
                <div className="my-2" id="wrap-row"></div>
                <p>{bachelorText2}</p>
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
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"2x"} />
                <p className="text-danger">{where}</p>
                <p>Iran</p>
                <p>tehran</p>
              </div>
              <div className="col-4 text-center text-light">
                <FontAwesomeIcon icon={faEnvelope} size={"2x"} />

                <p className="text-danger">{email}</p>
                <p>
                  <Link href="mailto:goyandeht@gmail.com">
                    goyandeht@gmail.com
                  </Link>
                </p>
                <p>
                  <Link href="mailto:gouyandeht@gmail.com">
                    gouyandeht@gmail.com
                  </Link>
                </p>
              </div>
              <div className="col-4 text-center text-light">
                <FontAwesomeIcon icon={faPhone} size={"2x"} />
                <p className="text-danger">{phone}</p>
                <p>
                  <Link href="tel:+98124366419">+989124366419</Link>
                </p>
                <p>
                  <Link href="tel:+989109191036">+989109191036</Link>
                </p>
              </div>
            </div>

            <span className="text-light ms-5">©Copyright Taha Gouyandeh</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
