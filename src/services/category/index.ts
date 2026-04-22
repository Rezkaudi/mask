// data
import categories from "@/content/categories/categories";

export const getCategoryByTitle = (title: string): CategoryType | undefined => {
    return categories.find((item) => item.title.split('\n').join("") === decodeURI(title));
};

export const getCategoryById = (id: string): CategoryType | undefined => {
    return categories.find((item) => item.id === id);
};

export const getCategoryTitleById = (id: string): string | undefined => {
    const category = categories.find((item) => item.id === id);
    return category?.title.replace(/\n/g, "").trim();
}

export const getAllCategories = () => {
    return categories
}