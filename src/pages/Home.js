import styles from "./Home.module.css";
// import GoogleLoginButton from "./GoogleLoginButton";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.yourYoutubeAiAssistantWrapper}>
        <b className={styles.yourYoutubeAiContainer}>
          <p className={styles.yourYoutubeAi}>{`Your Youtube AI `}</p>
          <p className={styles.yourYoutubeAi}> Assistant</p>
        </b>
      </div>
      <img className={styles.homeChild} alt="" src="/frame-33@2x.png" />
      <div className={styles.imHereToHelpYouWithWhatParent}>
        <div className={styles.imHereTo}>
          I'm here to help you with whatever you need, from answering questions
          to providing recommendations. We just need to access your google
          account to get going
        </div>
        <a href="questionPage">
        <img
          className={styles.btnGoogleSigninLightNormalIcon}
          alt=""
          src="/btn-google-signin-light-normal-web@2x.png"
        />
         </a>
        {/* <GoogleLoginButton /> */}
      </div>
      <img className={styles.userCirleIcon} alt="" src="/usercirle.svg" />
      <img className={styles.iconfillmenu} alt="" src="/iconfillmenu1.svg" />
    </div>
  );
};

export default Home;
