export type Attachment = {
    filename: string;
    content: Buffer<ArrayBuffer>;
    encoding: string;
    cid: string;
};

export interface IMailTemplate {
    generateHtml(): string;
    getAttachments(): Attachment[]
}

