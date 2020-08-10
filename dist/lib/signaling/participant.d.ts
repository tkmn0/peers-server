import * as SocketIo from 'socket.io';
import { MediaStatusMessage } from '#/lib/data/signaling_data';
export default class Participant {
    private id;
    private socket;
    private isAudioMute;
    private isVideoMute;
    Socket: () => SocketIo.Socket;
    IsAudioMute: () => boolean;
    IsVideoMute: () => boolean;
    Id: () => string;
    MediaStatus: () => MediaStatusMessage;
    constructor(id: string, socket: SocketIo.Socket);
    UpdateMediaStatus: (isAudioMute: boolean, isVideoMute: boolean) => void;
}
