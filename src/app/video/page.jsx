"use client"
import { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSession } from "next-auth/react";


function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(
    url = typeof window !== 'undefined' ? window.location.href : ''
) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
}

export default function VideoCall() {
    const roomID = getUrlParams().get('roomID') || randomID(5);
    const containerRef = useRef(null);
    const { data: session } = useSession();

    const { user } = session;
    const loggedInUserName = user.name;


    useEffect(() => {
        async function startVideoCall() {
            if (typeof window !== 'undefined') { // Check if running in a browser environment
                // Generate Kit Token
                const appID = 658986879;
                const serverSecret = "84b1cb33a6b72b91bc1a7a42d5b2013f";
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomID,
                    randomID(5),
                    loggedInUserName
                );

                // Create instance object from Kit Token
                const zp = ZegoUIKitPrebuilt.create(kitToken);

                // Start the call
                zp.joinRoom({
                    container: containerRef.current,
                    sharedLinks: [
                        {
                            name: 'Personal link',
                            url:
                                window.location.protocol +
                                '//' +
                                window.location.host +
                                window.location.pathname +
                                '?roomID=' +
                                roomID,
                        },
                    ],
                    scenario: {
                        mode: ZegoUIKitPrebuilt.GroupCall,
                    },
                });
            }
        }

        startVideoCall();
    }, [roomID]);

    return (
        <div
            className="myCallContainer"
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
}