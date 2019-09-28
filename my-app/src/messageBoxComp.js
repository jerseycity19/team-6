import React from 'react';
import textImg from './images/pic.jpg';
import './messageBox.css';
class MessageBox extends React.Component
{
    render(){
        return(
            // <div className='messageBox'>
            //     <img src={textImg}/>
            //     <p> THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA </p>
            // </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                    </div>

                    <div class="col-sm-12 col-md-8">
                    </div>
                </div>
            </div>
        );
    }
}
export default MessageBox;
