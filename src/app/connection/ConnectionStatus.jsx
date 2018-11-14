import React from 'react';
import { statuses } from './connection.constants';
import './connectionStatus.css';

export default function ConnectionStatus({ status, features }) {
    const message = status === statuses.OK
        ? `Firebase SDK loaded with { ${features.join(', ')} }`
        : 'Error loading the Firebase SDK, check the console.';

    return <div className='connection-status'>
        {message}
    </div>
}