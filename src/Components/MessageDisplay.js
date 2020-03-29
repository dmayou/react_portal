import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MessageDisplay.css';

function MessageDisplay(props) {
    const { emitReply } = props;
    const [reply, changeReply] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages);
    const endOfList = useRef(null);
    const handleChange = (event) => {
        changeReply(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        emitReply(reply);
        dispatch({ type: 'ADD_REPLY', payload: reply });
        changeReply('');
    };
    useEffect(() => {
        endOfList.current.scrollIntoView({ behavior: 'smooth' });
        console.log('scrolling');
    });
    const messageList = messages?.map((msg, i) => 
        <li key={i} className={i % 2 ? "UserLI" : "ResponseLI"}>
            {msg}
        </li>
    );
    return (
        <div className="MessageDisplay">
            <ul>
                {messageList}
            </ul>
            <form onSubmit={handleSubmit}>
                {!!messages.length && 
                <input autoFocus placeholder="type your reply" value={reply} onChange={handleChange}/>}
            </form>
            <div ref={endOfList}>
            </div>
        </div>
    );
}

export default MessageDisplay;