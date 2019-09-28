import React from 'react';
import textImg from './images/pic.jpg';
import './messageBox.css';
class MessageBox extends React.Component
{
    render(){
        return(
            <div className='messageBox'>
                <img src={textImg}/>
                <p> THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA </p>
            </div>
        );
    }
}
export default MessageBox;
