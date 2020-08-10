import { CreateOfferMessage } from '../data/signaling_data';

export default class MessageBuilder {
  static createOfferMessage: (ids: string[]) => CreateOfferMessage = (
    ids: string[]
  ) => {
    const message: CreateOfferMessage = {
      data: {
        ids,
      },
    };
    return message;
  };
}
