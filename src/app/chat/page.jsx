"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useChatContext } from "../Context/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import './style.css'

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

const AllChat = () => {
  const { value } = useChatContext();
  const { username, secret, email, setUsername, setSecret, setEmail } = value;
  const { data: session } = useSession();
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();
  // const chatID = "201493";
  // const chatAccessKey = "ca-814a721f-7293-4df8-8a47-ea77c93d92fe";

  useEffect(() => {
    if (session) {
      const { user } = session;
      const loggedInUserEmail = user.email;
      const loggedInUserName = user.name;
      const loggedInUserImage = user.image;
      const avatar = user.image
      setUsername(loggedInUserName);
      setSecret(loggedInUserEmail);
      setEmail(loggedInUserEmail);

      axios
        .put(
          "https://api.chatengine.io/users/",
          { username, secret, email },
          { headers: { "Private-Key": "f4b51919-3581-45cd-8489-b3af782bbe07" } }
        )
        .then((r) => {
          const userData = r.data;
          console.log("User Data:", userData);
        });
    }
  }, [session]);

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "" || email === "") {
      router.push("/");
    }
  }, [username, secret, email]);

  if (!showChat) return <div />;

  return (
    <div className="lg:w-full w-11/12  mx-auto pt-32 mb-32 ">
      <div className="shadow">
        <ChatEngine
          projectID="41415912-8be4-4c8a-9d10-1fe5e47be186"
          userName={username}
          userSecret={secret}
          userEmail={email}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
};

export default AllChat;
