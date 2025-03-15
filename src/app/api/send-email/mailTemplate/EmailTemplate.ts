import { Attachment, IMailTemplate } from "../interfaces/IMailTemplate";

export abstract class EmailTemplate implements IMailTemplate {

    protected addField = (label: string, value: string | undefined, user?: boolean) => {
        if (user === true) {
            return value && value.trim() !== ""
                ? `<li><strong>${label}:</strong> ${value}</li>`
                : "";
        } else {
            return value && value.trim() !== ""
                ? `<p><strong>${label}:</strong> ${value}</p>`
                : "";
        }
    };

    abstract generateHtml(): string
    abstract getAttachments(): Attachment[]
}
