// @ts-nocheck

import React, { useEffect, useState } from 'react';

type Props={
  text:string,
  onClick?:Function,
  child?:{
    text:string,
    url:string
  }[],
  url?:string,
  selectValue?:string,
  pathname?:string
}
export default function Index(props:Props){

  const [showChild,setShowChild]=useState(false);
  useEffect(()=>{
    
    setShowChild(props.text==props.selectValue);
  })
  const active=()=>{ 
    if(props.text==props.selectValue){
      return true
    }
    if(props.child){
      const has=props.child.filter(item=>{
        return item.text==props.selectValue
      })
      if(has && has.length>0){
        return true;
      }
    }
    return false
  }
  return <div className= {`sider_item ${active() && 'active'}`} onClick={()=>{
    // if(props.child){
    //   setShowChild(!showChild);
    // }
    props.onClick && props.onClick(props.url);
  }}>
    {props.text}
    {(showChild && props.child) && props.child.map((item:any)=>{ 
      return <div className={`sub_item ${props.pathname.includes(item.url) && 'sub_active'}`} key={item.text} onClick={(e)=>{
        e.stopPropagation();
        props.onClick && props.onClick(item.url);
      }}>
          {item.text}
      </div>
    })}
  </div>
}

