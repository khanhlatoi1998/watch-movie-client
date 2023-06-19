export interface LoginType {
    email: string;
    password: string;
}

export interface ItemType {
    link: string;
    label: string;
    active: boolean;
    icon?: JSX.Element;
}

export interface HeroType {
    link: string;
    img: string;
    name: string;
    category: string;
    date: string;
    duration: number;
}

export interface MovieType {
    link: any;
    img: any;
    thumbnail: any;
    name: any;
    userId: any;
    desc: any;
    category: any;
    language: any;
    year: any;
    time: any;
    video: any;
    rate: any;
    numberOfReviews: any;
    // reviews: [reviewSchema],
    // reviews: [];
    casts: [
        {
            name: any;
            img: any;
        }
    ]
}

export interface SearchType {
    category: string;
    language: string;
    yaer: number;
    hours: number;
    rate: number;
}