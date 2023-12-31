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

// export interface MovieType {
//     link: any;
//     img: any;
//     thumbnail: any;
//     name: any;
//     userId: any;
//     desc: any;
//     category: any;
//     language: any;
//     year: any;
//     time: any;
//     video: any;
//     rate: any;
//     numberOfReviews: any;
//     // reviews: [reviewSchema],
//     // reviews: [];
//     casts: [
//         {
//             name: any;
//             img: any;
//         }
//     ]
// }
export interface SearchType {
    category: string;
    language: string;
    yaer: number;
    hours: number;
    rate: number;
}

export interface UserInfoType {
    _id: string;
    fullName: string;
    token: string;
    isAdmin: boolean;
    image: string;
    likeMovies: Array<MovieType>
}

export interface ItemDashboardType {
    label: string;
    state: string;
    icon: JSX.Element ,
    onClick?: Function;
    component?: JSX.Element;
    href?: string;
}

export interface AddCastType {
    nameCast: string;
    imgCast?: any;
};


export interface MovieType {
    _id?: any; 
    movieTitle: string;
    hours: number | string,
    language: string;
    year: number | string;
    movieDescription?: string;
    movieCategory: string;
    imageWithTitleValue: string,
    imageWithThumbnailValue: string;
    video: any;
    rate: number;
    numberOfReviews?: number;
    casts?: AddCastType[] | any;
    reviews?: any;
};

