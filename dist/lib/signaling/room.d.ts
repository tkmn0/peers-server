/// <reference types="socket.io" />
import Participant from '#/lib/signaling/participant';
import { MediaStatusMessage } from '#/lib/data/signaling_data';
export default class Room {
    id: string;
    participants: Participant[];
    Sockets: () => import("socket.io").Socket[];
    Participants: () => Participant[];
    constructor(id: string);
    join(socket: SocketIO.Socket): void;
    leave(socket: SocketIO.Socket): void;
    updateMediaStatus(message: MediaStatusMessage): void;
    notifyMediaStatusTo(id: string): void;
    notifyMediaStatusToAll(id: string): void;
}
