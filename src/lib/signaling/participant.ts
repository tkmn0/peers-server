import * as SocketIo from 'socket.io';
import { MediaStatusMessage } from '#/lib/data/signaling_data';

export default class Participant {
  private id: string;

  private socket: SocketIo.Socket;

  private isAudioMute = false;

  private isVideoMute = false;

  public Socket = () => this.socket;

  public IsAudioMute = () => this.isAudioMute;

  public IsVideoMute = () => this.isVideoMute;

  public Id = () => this.id;

  public MediaStatus = () => {
    const message: MediaStatusMessage = {
      data: {
        id: this.id,
        isAudioMute: this.isAudioMute,
        isVideoMute: this.isVideoMute,
      },
    };
    return message;
  };

  constructor(id: string, socket: SocketIo.Socket) {
    this.id = id;
    this.socket = socket;
  }

  public UpdateMediaStatus = (isAudioMute: boolean, isVideoMute: boolean) => {
    this.isAudioMute = isAudioMute;
    this.isVideoMute = isVideoMute;
  };
}
