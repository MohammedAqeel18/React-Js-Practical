import React from 'react'



const Content = () => {
    function handleNameChange() {
        const names =["Subscribe", "Watch", "Rewatch"]
        const int = Math.floor (Math.random() * 3)
        return names[int];
}

return (
    <main>  
          <p> {handleNameChange()} to my channel</p>
            </main>
      
    
)
}
export default Content
