import { useEffect, useRef, useState } from "react";
import classes from "./ContactForm.module.css";
import Alert from "./Alert";
import emailjs from "emailjs-com";
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const checkCorrect = (obj) => {
  return obj === classes.correct;
};


function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nikyb84", "template_8eaa99g", formRef.current, "LmIXGASkOq8Kq7GEg")
      .then(
        (result) => {
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  const myRef = useRef();
  const [startAnimation, setStartAnimation] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, [startAnimation]);

  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState({
    subject: "",
    class: classes.correct,
  });
  const [message, setMessage] = useState("");
  const form = document.getElementById("form");
  const [showAlert, setShowAlert] = useState({ show: false, good: false });
  const submitHandler = (event) => {
    event.preventDefault();
    const values = [
      classes.correct,
      name.class,
      email.class,
      subject.class,
      message.class,
    ];
    if (values.every(checkCorrect)) {
      sendEmail(event);
      form.reset();
      setName({ name: "", class: classes.shrinkSpan });
      setEmail({ email: "", class: classes.shrinkSpan });
      setSubject({ subject: "", class: classes.shrinkSpan });
      setMessage({ message: "", class: classes.shrinkSpan });
      setShowAlert({ show: true, good: true });
    } else {
      setShowAlert({ show: true, good: false });
      setName({ name: "", class: classes.incorrect });
      setEmail({ email: "", class: classes.incorrect });
      setSubject({ subject: "", class: classes.incorrect });
      setMessage({ message: "", class: classes.incorrect });
    }
  };

  return (
    <div className={classes.contactForm} ref={myRef}>
      {showAlert.show && (
        <Alert
          good={showAlert.good}
          onClick={() => {
            setShowAlert({ show: false, good: false });
          }}
        />
      )}
      <div className={classes.form}>
        <form action="" onSubmit={submitHandler} id={"form"} ref={formRef}>
          <div className={classes.formBody}>
            <div className={classes.nameSubject}>
              <div className={`${classes.formInput} ${classes.name} ${startAnimation && classes.nameAnimation}`}>
                <input
                  type="text"
                  placeholder={"Name"}
                  name={"from_name"}
                  onFocus={() => {
                    setName({ name: "", class: "" });
                  }}
                  onBlur={(e) => {
                    e.target.value.trim().length > 1
                      ? setName({
                          name: e.target.value,
                          class: classes.correct,
                        })
                      : setName({ name: "", class: classes.incorrect });
                  }}
                />
                <span className={name.class}></span>
              </div>
              <div className={`${classes.formInput} ${classes.email} ${startAnimation && classes.emailAnimation}`}>
                <input
                  type="email"
                  placeholder={"Email"}
                  name="reply_to"
                  onFocus={() => {
                    setEmail({ name: "", class: "" });
                  }}
                  onBlur={(e) => {
                    validateEmail(e.target.value)
                      ? setEmail({
                          email: e.target.value,
                          class: classes.correct,
                        })
                      : setEmail({ email: "", class: classes.incorrect });
                  }}
                />
                <span className={email.class}></span>
              </div>
            </div>
            <div className={classes.nameSubject}>
              <div className={`${classes.formInput} ${classes.subject} ${startAnimation && classes.subjectAnimation}`}>
                <input
                  type="text"
                  placeholder={"Subject"}
                  onFocus={() => {
                    setSubject({ name: "", class: classes.correct });
                  }}
                  name={"subject"}
                  onBlur={(e) => {
                    setSubject({
                      subject: e.target.value,
                      class: classes.correct,
                    });
                  }}
                />
                <span className={subject.class}></span>
              </div>
            </div>
            <div className={classes.message}>
              <div className={` ${classes.formMessage} ${classes.formInput} ${startAnimation && classes.messageAnimation}`}>
                <textarea
                  cols="100%"
                  rows="10"
                  name={'message'}
                  placeholder={"Message"}
                  onFocus={() => {
                    setMessage({ name: "", class: "" });
                  }}
                  onChange={(e) => {
                    e.target.value.trim().length > 2
                      ? setMessage({
                          message: e.target.value,
                          class: classes.correct,
                        })
                      : setMessage({ message: "", class: classes.incorrect });
                  }}
                ></textarea>
              
                <span className={message.class}></span>
              </div>
            </div>
          </div>
          <div className={classes.submitButton}>
            <div className={classes.center}>
              <button className={classes.linkButton} type={"Submit"}>
                <svg width="180px" height="60px" viewBox="0 0 180 60">
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>SEND</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
