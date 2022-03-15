import React, { useState } from 'react';
import Item from './stakeSliderItem'
import './index.scss';


type Props={
  type:string,
  data:any,
  history?:any
}
export default function Index(props:Props){ 
  const click=(e:string)=>{   
      props.history.push(e) 
  }
  return <div className="stafi_stake_sider"> 
          {props.data.map((item:any)=>{
            return <Item text={item.text} pathname={props.history.location.pathname} url={item.url} selectValue={props.type} key={item.text} child={item.child}  onClick={click}/>
          })}
  </div>
}