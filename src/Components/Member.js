import React from 'react'

const Member = ({member, infoClick}) => {

  const spirit = member.display ? member.spiritURL : ''
  return(
    <div>
      <div onClick={(e) => {infoClick(e, member)}}>{member.name}</div>
      <div>{member.quote}</div>
      <img src={`${spirit}`}></img>
    </div>
  )
}

export default Member;
