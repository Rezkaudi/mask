import { IMailTemplate } from "./IMailTemplate";

export type mailInfo = {
    from: string,
    to: string,
    subject: string,
    template: IMailTemplate
};


export interface IMailService {
    send(info: mailInfo): Promise<void>;
}