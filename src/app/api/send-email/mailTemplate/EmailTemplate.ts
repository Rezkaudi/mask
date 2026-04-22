import { Attachment, IMailTemplate } from "../interfaces/IMailTemplate";

export abstract class EmailTemplate implements IMailTemplate {

    protected addField = (label: string, value: string | undefined, user?: boolean, startWithBreak?: boolean) => {
        if (user === true) {
            return value && value.trim() !== ""
                ? `<li><strong>${label}:</strong> ${value.split("\n").join("<br>")}</li>`
                : "";
        } else {
            return value && value.trim() !== ""
                ? `<p><strong>${label}:</strong> ${startWithBreak ? "<br>" : ""} ${value.split('\n').join("<br>")}</p>`
                : "";
        }
    };

    abstract generateHtml(): string
    abstract getAttachments(): Attachment[]
}
