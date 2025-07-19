import React from 'react'

function SocialSnippet({link, icon}) {
  return (
    <a href={link} target='_blank'>
        <div className="outer-div">
            <div className="btn-round">
                {icon}
            </div>
        </div>
    </a>
  )
}

export default SocialSnippet