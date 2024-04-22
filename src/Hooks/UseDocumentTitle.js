import  { useEffect } from 'react'

function UseDocumentTitle(count) {
useEffect(()=>{
    document.title=`Document ${count}`
},[count])
  
}

export default UseDocumentTitle
