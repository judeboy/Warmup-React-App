import React from 'react'
import Member from './Member'

const MemberList = ({members, infoClick}) => {

return(
  <div>
    {members.map(member => (
      <Member key={member.id} member={member} infoClick={infoClick}/>
    ))}
  </div>

)}

export default MemberList;
