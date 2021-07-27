import React from 'react';
import {Link} from 'react-router-dom';
export function Options() {
    return (
        <div className="container list">
            <Link to="/uploadrecordform">add record to db</Link>
            <Link to="/uploadfileform">add file to db</Link>
        </div>
    )
}

