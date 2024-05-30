import React from 'react'

const Card = ({name,description,interest}) => {
  return (
    <div style={{border:"1px solid #ddd",padding:20,paddingBottom:40,width:400,backgroundColor:"#f0f9ff",borderRadius:10,boxShadow:"5px 5px 20px"}}>
      <h1>{name}</h1>
      <div>{description}</div>
      <h4 style={{lineHeight:0}}>Interest</h4>
      <div>
        {
            interest?.map((item,index)=>(
                <div key = {index} style={{marginBottom:10}}>
                    <div>{item}</div>
                </div>
            ))
        }
      </div>
      <div style={{display:'flex',marginTop:10}}>
        <a href="gmail" style={{marginRight:20,padding:20,backgroundColor:"#3b82f6",color:'white',borderRadius:10,textDecoration:'none'}}>Gmail</a> <br />
        <a href="linkedin" style={{padding:20,backgroundColor:"#3b82f6",color:'white',borderRadius:10,textDecoration:'none'}}>Linkedin</a>
      </div>
    
    </div>
  )
}

export default Card
