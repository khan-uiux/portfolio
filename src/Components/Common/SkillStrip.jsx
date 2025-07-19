import React from 'react'

function SkillStrip({lang, wide, bgColor, isDark}) {
  return (
    <div style={{margin:"14px 0px"}}>
        <h6 className="skill-name">{lang}</h6>
        <div className="outer-shadow">
            <div className="inner-shadow" style={{width:`${wide}`, backgroundColor:`${isDark ? isDark : bgColor}`}}>
            </div>
        </div>
    </div>
  )
}

export default SkillStrip