import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';

function App(){
    return (
        <>
            <Card 
                id={Sdata[0].id}
                email={Sdata[0].email}
                first_name={Sdata[0].first_name}
                last_name={Sdata[0].last_name}
                avatar={Sdata[0].avatar}
            />
            <Card 
                id={Sdata[1].id}
                email={Sdata[1].email}
                first_name={Sdata[1].first_name}
                last_name={Sdata[1].last_name}
                avatar={Sdata[1].avatar}
            />
            <Card 
                id={Sdata[2].id}
                email={Sdata[2].email}
                first_name={Sdata[2].first_name}
                last_name={Sdata[2].last_name}
                avatar={Sdata[2].avatar}
            />
            <Card 
                id={Sdata[3].id}
                email={Sdata[3].email}
                first_name={Sdata[3].first_name}
                last_name={Sdata[3].last_name}
                avatar={Sdata[3].avatar}
            />
            <Card 
                id={Sdata[4].id}
                email={Sdata[4].email}
                first_name={Sdata[4].first_name}
                last_name={Sdata[4].last_name}
                avatar={Sdata[4].avatar}
            />
            <Card 
                id={Sdata[5].id}
                email={Sdata[5].email}
                first_name={Sdata[5].first_name}
                last_name={Sdata[5].last_name}
                avatar={Sdata[5].avatar}
            />
            
            
            
            
        </>
    );
}

export default App;