import React from 'react'

function CallBackTitle() {
  console.log("title page")
  return (
    <div>
      welcome to the app
    </div>
  )
}

export default React.memo(CallBackTitle)
