import React from 'react'

function MemoComp({name}) {
    console.log("rendring Memo component")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
