import MessageBox from './messageBoxComp';
import React from 'react';
class Homepage extends React.Component
{
    render() {
        return (
            <div>
                <MessageBox/>
                <MessageBox/>
                <MessageBox/>
            </div>
        );
      }
}
export default Homepage;