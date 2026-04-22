type PurchaseProcessCategoryType = "On-site purchase" | "Home delivery purchase" | "Bring-in purchase"

type SubContentType = "simple" | "faq" | "list" | "image" | "video" | "table" | "imageList";

interface BlogItemBase {
    id: string;
    title: string;
    type: SubContentType;
}

interface SimpleContent extends BlogItemBase {
    type: "simple";
    description: string;
}

interface ImageContent extends BlogItemBase {
    type: "image";
    imageSrc: string;
}

interface VideoContent extends BlogItemBase {
    type: "video";
    list: {
        id: string
        videoSrc: string;
        poster: string
    }[]
}
interface FAQContent extends BlogItemBase {
    type: "faq";
    description?: string;
    subTitle?: string
    items: {
        id: string;
        question: string;
        answer: string;
    }[];
}

interface ListContent extends BlogItemBase {
    type: "list";
    topDescription?: string;
    listType?: "number" | "dot" | "none",
    subTitle?: string
    withCounter?: boolean;
    items: {
        id: string;
        title?: string;
        description?: string;
        imageSrc?: string | string[];
        images?: { src: string; alt?: string }[];
        isLink?: boolean
        href?: string
        subItems?: {
            id: string;
            text: string;
            isBold?: boolean;
        }[];
        bottomDescription?: string;
    }[];
    sectionImages?: string[] | { src: string; alt?: string }[];
    bottomDescription?: string;
    withPagination?: boolean;
}

interface ImageListContent extends BlogItemBase {
    type: "imageList";
    items: {
        id: string;
        imageSrc: string;
        alt: string;
    }[];
}

type BlogSubContent = SimpleContent | FAQContent | ImageContent | ListContent | VideoContent | TableContent | ImageListContent;

interface BlogPost {
    id: string;
    title: string;
    date: string
    imageSrc: string;
    description: string;
    metaDescription: string;
    subContent: BlogSubContent[];
}

interface CategoryType {
    id: string;
    title: string;
    imageSrc: string;

    items: {
        id: number;
        title: string;
        image: string;
    }[];

    makers: {
        jp: string;
        en: string;
        link: string;
        imageSrc: string;
    }[];

    purchaseItems: {
        title: string;
        imageSrc: string;
    }[];
}
interface TableContent extends BlogItemBase {
    type: "table";
    title: string;
    topDescription: string;
    headers: string[];
    rows: {
        id: string;
        columns: string[];
    }[];
    bottomDescription: string;
}

