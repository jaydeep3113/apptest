import React from 'react';

function card(props){
    console.log(props);
    return(
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.avatar} alt='myPic' className='card_img' />
                    <div className='card_info'>
                        <span className='card_name'>{props.first_name} {props.last_name}</span>
                        <h3 className='card_email'>{props.email}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default card;