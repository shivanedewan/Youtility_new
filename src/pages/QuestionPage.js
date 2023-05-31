import styles from "./QuestionPage.module.css";
const QuestionPage = () => {
  return (
    <div className={styles.questionPage}>
      <div className={styles.frameParent}>
        <div className={styles.chatBubblesenddefaultParent}>
          <div className={styles.chatBubblesenddefault}>
            <div
              className={styles.howAreYou}
            >{`Get me latest trends on youtube? `}</div>
          </div>
          <img className={styles.iconfilledit} alt="" src="/iconfilledit.svg" />
        </div>
        <div className={styles.chatBubblerecevedreceived}>
          <div className={styles.asAnAi}>
            This week the most liked videos include the parody of Shah rukh khan
            and the stand up video of Vipul Goyal. People have enjoyed the new
            song of weeknd and this is topping our youtube charts. These were
            the biggest trends this week
          </div>
          <div className={styles.chatBubblerecevedreceivedChild} />
          <div className={styles.frameGroup}>
            <div className={styles.iconoutlinelikeParent}>
              <img
                className={styles.iconoutlinelike}
                alt=""
                src="/iconoutlinelike.svg"
              />
              <img
                className={styles.iconoutlinelike}
                alt=""
                src="/iconoutlinedislike.svg"
              />
            </div>
            <div className={styles.iconfillclipboardParent}>
              <img
                className={styles.iconfillclipboard}
                alt=""
                src="/iconfillclipboard.svg"
              />
              <div className={styles.copy}>Copy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.iconfillmenuParent}>
        <img className={styles.iconfillmenu} alt="" src="/iconfillmenu.svg" />
        <div className={styles.fitbot}>
          <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
          <div className={styles.nameActivity}>
            <b className={styles.youtility}>Youtility</b>
            <div className={styles.alwaysActive}>
              <div className={styles.alwaysActiveChild} />
              <div className={styles.alwaysActive1}>Always active</div>
            </div>
          </div>
        </div>
        <img
          className={styles.hugeIconusersoliduserCirc}
          alt=""
          src="/hugeiconusersolidusercircle.svg"
        />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.frameContainer}>
        <input
          className={styles.frameChild}
          type="text"
          placeholder="Ask me anything..."
          id="inputField"
        />
        <button className={styles.send}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" />
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
