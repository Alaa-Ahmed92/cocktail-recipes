import React from 'react'
import { Message, MessageProps } from 'semantic-ui-react'

const MessageBox: React.FC<MessageProps> = (props) => {

    return (
        <Message
            {...props}
            content={props.content}
            data-testid="message-box"
        />
    )
}

export default MessageBox