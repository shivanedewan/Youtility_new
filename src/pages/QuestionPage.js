import React, { useState, useRef } from 'react';
import styles from './QuestionPage.module.css';

import httpRequest from '../services/api';

const QuestionPage = () => {
  const [conversation, setConversation] = useState([
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const [channelId, setChannelid] = useState('');

  const handleAskMeAnythingClick = () => {
    setIsTyping(true);
    inputRef.current.focus();
  };

  const handleInputKeyPress = async (event) => {
    let userMessage='';
    if (event.key === 'Enter' || event.type === 'click' ){
      const userMessage = inputRef.current.value.trim();
      if (userMessage !== '') {
        setConversation((prevConversation) => [
          ...prevConversation,
          { sender: 'user', message: userMessage },
        ]);
        inputRef.current.value = ''; 
      }
      setIsTyping(false);
    }
    let accessToken='ya29.a0AWY7CkmrQ3nWhGC6G7N-px0a95H78T-ELzndBwC0jD6k0ZFm5Uvqd3JDWM9OufpogPquVXTm6QfolTxsZB90hIxBNx-5gIa4Wo5yRbGsh5GGoH9FMXGoHl3YgE1upoJ2pQsR8wsDhMk0afnmHZFwjUJeJID6-QaCgYKAT0SARMSFQG1tDrpM8-_O_zm4_Wh7mskzYHKlA0165';
    let channel_id='UCcA80NqKraq7phtzMMgP4nw';
    setChannelid('UCcA80NqKraq7phtzMMgP4nw')
    const e = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'retry':false,'question': userMessage, 'channelId': channel_id, 'accessToken': accessToken }, { 'Content-Type': 'application/json' });
    await fetchAns();
  };
  const fetchAns = async () => {
    const timeout = 1800000; 
    const retryInterval = 10000; // 10 seconds (modified value)
    const startTime = Date.now();
    let retryCount = 0;
  
    while (Date.now() - startTime < timeout) {
      try {
        const requestPromise = httpRequest(
          'https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/get_ans',
          'POST',
          { 'channelId':'UCcA80NqKraq7phtzMMgP4nw' },
          { 'Content-Type': 'application/json' },
          retryInterval
        );
  
        const response = await requestPromise;
  
        if (response && response.data) {
          const ans = response.data;
          console.log("issub1")
          console.log(response.data)
          console.log("issub2")
          // setPT(Date.now() - startTime)
          setConversation((prevConversation) => [
            ...prevConversation,
            { sender: 'bot', message: ans },
          ]);
          console.log("Received ans:", ans);
          return; // Exit the function since we received the answer
          
        }
        else if (response.status === 500) {
            setError("AI not able to process the request right now")
        } 
        else {
          console.log("Request submitted");
          // Handle the case when the request is submitted but no answer is received
        }
      } catch (error) {
        console.log("Error occurred:", error.message);
        // Handle the case when the request times out
      }
  
      await new Promise(resolve => setTimeout(resolve, retryInterval)); // Wait for the specified retry interval before the next iteration
    }
    setLoading(false)
    
    setError("Errir while processing your request")
    throw new Error("Request timeout"); // Throw an error if no response received within one minute
  };
  

  return (
    <div className={styles.questionPage}>
      <div className={styles.frameParent}>
      <div className={styles.conversationContainer}>

        {conversation.map((message, index) => (
          <div
            key={index}
            className={
              message.sender === 'user' ? styles.chatBubblesenddefaultParent : styles.chatBubblerecevedreceived
            }
          >
            <div className={styles.chatBubblesenddefault}>
              <div className={styles.howAreYou}>{message.message}</div>
            </div>
            {message.sender === 'user' ? (
              <img className={styles.iconfilledit} alt="" src="/iconfilledit.svg" />
            ) : (
              <>
                <div className={styles.asAnAi}>{message.message}</div>
                <div className={styles.chatBubblerecevedreceivedChild} />
                <div className={styles.frameGroup}>
                  <div className={styles.iconoutlinelikeParent}>
                    <img className={styles.iconoutlinelike} alt="" src="/iconoutlinelike.svg" />
                    <img className={styles.iconoutlinelike} alt="" src="/iconoutlinedislike.svg" />
                  </div>
                  <div className={styles.iconfillclipboardParent}>
                    <img className={styles.iconfillclipboard} alt="" src="/iconfillclipboard.svg" />
                    <div className={styles.copy}>Copy</div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
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

        <img className={styles.hugeIconusersoliduserCirc} alt="" src="/hugeiconusersolidusercircle.svg" />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.frameContainer}>

      <input
        ref={inputRef}
        className={`${styles.askMeAnythingParent} ${isTyping ? styles.typing : ''}`}
        onClick={handleAskMeAnythingClick}
        contentEditable={isTyping}
        placeholder={isTyping ? null : 'Ask me anything...'}
      />
      <img className={styles.sendIcon} alt="" src="/send.svg" onClick={handleInputKeyPress} />
   

    </div>

    </div>
  );
};

 export default QuestionPage;
