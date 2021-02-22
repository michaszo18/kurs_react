import React from 'react';
import { BsSearch, BsFillCursorFill, BsFillChatSquareDotsFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

export default () => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex justify-content-evenly my-3">
                <AiFillHome />
                <BsFillCursorFill />
                <BsFillChatSquareDotsFill />
            </div>
        </div>
    )
}