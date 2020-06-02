import React, { useState } from 'react';
import * as peopleRemote from '../remote/people.remote';

export const AccountComponent: React.FC = () => {
    const [users, setUsers] = useState([]);

    // We need to get data for our application
    // So we should send a request to our API to acquire it
    // 1. A get request is sent
    // 2. Update state with new data
    // 3. Component rerenders
    
    // send get requsest
    peopleRemote.getAllPeople();

    return (
    <div>
        <h2>Accounts Section</h2>


        
    </div>
    );
}