import React from 'react';
import './index.scss'

type Props={
    icon?:any,
    selectedIcon?:any,
    onClick?:Function,
    selected?:boolean,
    text:string,
    url:string
}
export default function Index(props:Props){
    if(props.url.includes("https:")){
    return <a href={props.url} target="_blank" className={`sider_item ${props.selected?'selected':''}`}>
        <img src={props.selected?props.selectedIcon:props.icon}/> {props.text}
    </a>
    }else{
        return <div onClick={()=>{
            props.onClick && props.onClick();
        }} className={`sider_item ${props.selected?'selected':''}`}>
        <img src={props.selected?props.selectedIcon:props.icon}/> {props.text}
    </div>
    }
}