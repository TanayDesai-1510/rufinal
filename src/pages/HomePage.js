import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useToast } from "@chakra-ui/react";
import { db, FirebaseAuth } from "../firebase/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const HomePage = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const toast = useToast();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {}, []);

  const requestGoogleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(FirebaseAuth, googleProvider).then((data) => {
      console.log(data);
      localStorage.setItem("UserName", data?.user?.displayName);
      localStorage.setItem("Email", data?.user?.email);
      localStorage.setItem("photoURL", data?.user?.photoURL);
      navigate("/Papers");
    });
  };

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExercisesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrainers1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trainers']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.fitnesslandingpage}>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <button className={styles.logo} onClick={onLogoClick}>
            <img style={{ height: "5vw" }} alt="" src="/rutgers.png" />
          </button>
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button
                className={styles.login}
                style={{ fontSize: "180%" }}
                onClick={requestGoogleAuth}
              >
                LOGIN
              </button>
            </div>
            <button className={styles.hamburgerIcon}>
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.herosection}>
        <div className={styles.herotext}>
          <div className={styles.herocta}>
            <div className={styles.title}>
              <p className={styles.cardio}>{``}</p>
              <p style={{ fontSize: "150px" }}>OneStop</p>
            </div>
            <div className={styles.subtitle}>
              Welcome to Rutgers OneStop! Your go-to platform for exam resources
              at Rutgers University. Upload your midterms and exams to share
              with fellow students, or browse and access exams uploaded by
              others. With Rutgers OneStop, exam preparation has never been
              easier. Join our community and streamline your study process
              today!
            </div>
            <div className={styles.buttonrow}>
              <button className={styles.button} onClick={requestGoogleAuth}>
                <div className={styles.getStarted}>Get Started</div>
              </button>
              {/* <button className={styles.button1} onClick={requestGoogleAuth}>
                <div className={styles.getStarted}>Preview</div>
              </button> */}
            </div>
          </div>
        </div>
        <img
          className={styles.heroimageIcon}
          alt=""
          src="/rut.jpg"
          style={{ marginRight: "70px", marginLeft: "40px" }}
        />
        {/* <video
          width="640"
          height="360"
          className={styles.heroimageIcon}
          autoPlay
          loop
          muted
        >
          <source src="/doc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <div
        className={styles.popularexercisessection}
        data-scroll-to="popularExercisesSection"
      >
        <div className={styles.popularexercises}>
          <div className={styles.title1}>
            <div className={styles.popularExercises}>Features</div>
          </div>

          <div className={styles.exercisecards}>
            <div className={styles.column1}>
              <div className={styles.exercisecard}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="/upload-final.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      Upload Tests
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.exercisecard}>
                <img className={styles.imageIcon} alt="" src="/interface.jpg" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      User-Friendly Interfaces
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div className={styles.column1}>
              <div className={styles.exercisecard2}>
                <img className={styles.imageIcon} alt="" src="/discussion.jpg" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises} style={{color: "red"}}>
                      Discuss and Ask Questions
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.exercisecard}>
                <img className={styles.imageIcon} alt="" src="/safeguard.jpg" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      Safeguards Patient Data
                    </div>
                    
                  </div>
                </div>
              </div> */}
            </div>

            <div className={styles.column1}>
              <div className={styles.exercisecard2}>
                <img className={styles.imageIcon} alt="" src="/view-pdf.png" />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>
                      View Tests
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.exercisecard}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/transparency.jpg"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.popularExercises}>Transparency</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoriessection}>
        <div className={styles.popularexercises}>
          <div className={styles.category}>
            <div className={styles.div6}>01</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Login With Google</div>
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>02</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Upload Tests</div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>03</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>View Tests</div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>*</div>
            <div className={styles.action}>
              <div className={styles.titles3}>
                <div className={styles.title6}>Ask Questions</div>
                {/* <div className={styles.courses}>some description</div> */}
              </div>
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
        </div>
      </div>
      {/* <div className={styles.subscribe}>
        <div className={styles.subscribeform}>
          <div className={styles.title11}>Connect With Us</div>
          <form className={styles.form} id="formID">
            <input
              className={styles.input}
              placeholder="Email"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className={styles.button3}
              type="submit"
              form="formID"
              onClick={{}}
            >
              <div className={styles.getStarted1}>Subscribe</div>
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
