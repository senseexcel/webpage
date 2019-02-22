
export interface ListItem {
    text?: string;
    type?: string;
    id?: string;
    url?: string;
    icon?: string;
}


export interface PartnerItem {
    id?: string;
    index?: number;
    logo?: string;
    contact?: string;
    phone?: string;
    email?: string;
    sociallist?: ListItem[];
}

