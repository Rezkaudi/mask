import nodemailer from "nodemailer";

// interfaces
import { IMailService, mailInfo } from "../interfaces/IMailService";

export class GmailSender implements IMailService {

    private transporter;
    private userAuth = process.env.GMAIL_USER
    private passAuth = process.env.GMAIL_PASS

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: this.userAuth,
                pass: this.passAuth,
            },
        });
    }

    async send({ from, to, subject, template }: mailInfo): Promise<void> {

        await this.transporter.sendMail({
            from,
            to,
            subject,
            html: template.generateHtml(),
            attachments: template.getAttachments(),
        });
    }
}
