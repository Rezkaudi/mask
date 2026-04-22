import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// interfaces
import { IMailService, mailInfo } from "../interfaces/IMailService";

export class GmailSender implements IMailService {
    private transporter: nodemailer.Transporter;

    private readonly userAuth = process.env.SMTP_USER!;
    private readonly passAuth = process.env.SMTP_PASSWORD!;
    private readonly smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    private readonly smtpPort = Number(process.env.SMTP_PORT || 465);//587
    private readonly nodeEnv = process.env.NODE_ENV || "production";

    constructor() {
        const options: SMTPTransport.Options = {
            host: this.smtpHost,
            port: this.smtpPort,
            secure: this.nodeEnv === "development" ? false : true,
            auth: {
                user: this.userAuth,
                pass: this.passAuth,
            },
        };

        this.transporter = nodemailer.createTransport(options);
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
