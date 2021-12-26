import React from 'react'
function Profile()
{
    const [loggedIn,setLoggedIN]=useState(1)
    return (
        <div>
            {loggedIn===1?
            <h1>Welcome User</h1>
            :loggedIN==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>
        
        }



        </div>


    )

}
export default Profile;