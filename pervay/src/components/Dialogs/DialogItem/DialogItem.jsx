import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom"

const Dialogs_item = (props) => {

let path = "/Dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialogs_item;