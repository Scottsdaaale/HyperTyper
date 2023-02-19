import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div id="navbar">
                <ul id='horizontal-list'>
                    <li>HyperTyper</li>\\
                    
                    <Link to="/">
                        <img className='nav-icons' src="https://library.kissclipart.com/20180902/rfw/kissclipart-keyboard-shortcuts-icon-clipart-computer-keyboard-f99b1f80b9eb07d3.png" alt='keyboard icon'/>
                    </Link>
            
                    <Link to="results">
                        <img id ="results-icon" className='nav-icons' src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/data-statistics-4.png" alt="results" />
                    </Link>

                    {/* <Link to="login">
                        <img className='nav-icons' src='https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png' alt='login'/>
                    </Link>
                    <Link to="edit-account">
                    <img className='nav-icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/OOjs_UI_icon_edit-ltr-gray.svg/1024px-OOjs_UI_icon_edit-ltr-gray.svg.png' alt='edit account'/>
                    </Link> */}
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default NavBar



// ORGINAL // https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Icon_Stats_active.svg/48px-Icon_Stats_active.svg.png?20120517115919 