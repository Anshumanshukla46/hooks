import React from 'react'

import Parent from './useContext/Parent' // useContext
import Memo from './useMemo/Memo'; // useMemo
import ParentCallback from './useCallback/ParentCallback'; // callback

const App = () => {
  return (
    <div>
      {/* <Parent />  */}
      {/* <Memo /> */}

      <ParentCallback />

    </div>
  )
}

export default App
