export type Category = "phones" | "laptops";

export type Product = {
    id: number;
    title: string;
    category: Category;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: "iPhone 15",
        category: "phones",
        price: 999,
        description: "Apple phone with A16 chip, 6.1 inch display and USB-C port."
    },
    {
        id: 2,
        title: "Samsung Galaxy S24",
        category: "phones",
        price: 899,
        description: "Android phone with 120 Hz display and three cameras."
    },
    {
        id: 3,
        title: "Google Pixel 8",
        category: "phones",
        price: 699,
        description: "Phone with clean Android and the best camera software."
    },
    {
        id: 4,
        title: "MacBook Air 13",
        category: "laptops",
        price: 1199,
        description: "Thin laptop on the M3 chip, works up to 18 hours without charging."
    },
    {
        id: 5,
        title: "Dell XPS 14",
        category: "laptops",
        price: 1499,
        description: "Laptop with aluminium body, 14 inch screen and Intel Core Ultra."
    },
    {
        id: 6,
        title: "Lenovo ThinkPad X1",
        category: "laptops",
        price: 1399,
        description: "Business laptop with a good keyboard and a long warranty."
    }
];
