import Participant from '#/lib/signaling/participant';
import { MediaStatusMessage } from '#/lib/data/signaling_data';

export default class Room {
  id: string;

  participants: Participant[] = [];

  public Sockets = () => this.participants.map((p) => p.Socket());

  public Participants = () => this.participants;

  constructor(id: string) {
    this.id = id;
  }

  join(socket: SocketIO.Socket) {
    this.participants.push(new Participant(socket.id, socket));
  }

  leave(socket: SocketIO.Socket) {
    this.participants = this.participants.filter((x) => x.Id() !== socket.id);
  }

  updateMediaStatus(message: MediaStatusMessage) {
    const participant = this.participants.find(
      (p) => p.Id() === message.data.id
    );
    participant?.UpdateMediaStatus(
      message.data.isAudioMute,
      message.data.isVideoMute
    );
    this.participants
      .filter((p) => p.Id() !== message.data.id)
      .forEach((p) => p.Socket().emit('remote-media-updated', message));
  }

  notifyMediaStatusTo(id: string) {
    const target = this.participants.find((p) => p.Id() === id);
    this.participants
      .filter((p) => p.Id() !== id)
      .forEach((p) => {
        target?.Socket().emit('remote-media-updated', p.MediaStatus());
      });
  }

  notifyMediaStatusToAll(id: string) {
    const target = this.participants.find((p) => p.Id() === id);
    this.participants
      .filter((p) => p.Id() !== id)
      .forEach((p) => {
        p.Socket().emit('remote-media-updated', target?.MediaStatus());
      });
  }
}
