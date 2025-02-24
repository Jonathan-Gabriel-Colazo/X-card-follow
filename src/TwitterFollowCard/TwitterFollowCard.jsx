import './TwitterFollowCard.css'
import { useState } from 'react'

export function TwitterFollowCard ({ formatUserName, userName, children,}) {
    const [isFollowing, setIsFollowing] = useState (false)
    
    const text = isFollowing ? `Siguiendo` : `Seguir`
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
   
   
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (

        <article className='tw-followCard'>

        <header className='tw-followCard-header'>

          <img className='tw-followCard-avatar' src={`https://unavatar.io/x/${userName}`} alt="avatar"  />

          <div className='tw-followCard-info'>
            <strong>{children}</strong>
             <span className='tw-followCard-infoUserName'>{(formatUserName(userName))}</span>
          </div>
        </header>
        <aside>
          <button onClick={handleClick} className={buttonClassName}>{text}</button>
        </aside>
      </article>
    )
}