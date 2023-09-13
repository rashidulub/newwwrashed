"use client";
import dynamic from "next/dynamic";
import {
  ChatEngineWrapper,
  ChatFeed,
  ChatHeader,
  ChatSettings,
  ChatSocket,
} from "react-chat-engine";
import { useChatContext } from "../Context/context";
// import axios from "axios";

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

const CourseChat = ({ courseData }) => {
  // console.log("courseChat",courseData)
  const { value } = useChatContext();
  const { username } = value;
  const { chatAccessKey, chatID } = courseData;
  return (
    <div className="relativen">
      <ChatEngineWrapper>
        <ChatSocket
          projectID="41415912-8be4-4c8a-9d10-1fe5e47be186"
          chatID={chatID}
          chatAccessKey={chatAccessKey}
          senderUsername={username}
        />
        <div className="chatBox">
          <ChatFeed
            activeChat={chatID}
            
            renderNewMessageForm={() => <MessageFormSocial />}
          />
          {/* <ChatSettings /> */}
        </div>
      </ChatEngineWrapper>
    </div>
  );
};

export default CourseChat;
