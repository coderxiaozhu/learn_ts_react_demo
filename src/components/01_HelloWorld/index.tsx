import React, { memo, ReactElement } from 'react'

interface MessageProps {
    message?: string
}

const HelloWorld: React.FC<MessageProps> = memo((props: MessageProps):ReactElement => {
  return (
    <div>
        {
            props.message
        }
    </div>
  )
})

HelloWorld.defaultProps = {
    message: "Hello World"
}

export default HelloWorld