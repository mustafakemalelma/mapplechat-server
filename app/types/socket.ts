export interface ServerToClientEvents {
    chatMessage: (msg: any) => void;
    typingStarted: (id: string) => void;
    typingEnded: () => void;
}

export interface ClientToServerEvents {
    chatMessage: (msg: any) => void;
    typingStarted: () => void;
    typingEnded: () => void;
}

export interface InterServerEvents {
    ping: () => void;
}
