export interface Product {
    id: number;
    name: string;
    description: string;
    imageUrls: string[];
    rating: number;
    likes: number;
    link: string;
}

export interface Category {
    id: number;
    name: string;
    products: Product[];
}
