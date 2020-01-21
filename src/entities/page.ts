export interface PageSeoMeta {
    seo_description: string;
    seo_title: string;
}

export interface Page {
    id: string;
    seo_meta: PageSeoMeta;
    title: string;
    featured_image: string | null;
    content: any;
}
