
export interface ListItem {
    text?: string;
}


export interface FaqItem {
    id?: string;
    index?: number;
    header?: string;
    text?: string;
    list?: ListItem[];
}

