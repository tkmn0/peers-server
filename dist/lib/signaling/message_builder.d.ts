import { CreateOfferMessage } from '../data/signaling_data';
export default class MessageBuilder {
    static createOfferMessage: (ids: string[]) => CreateOfferMessage;
}
