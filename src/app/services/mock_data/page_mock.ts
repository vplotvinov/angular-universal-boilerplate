import { Page } from '../../../entities/page';

export const PAGE_MOCK: Page = {
    id: '123',
    seo_meta: {
        seo_description: 'mock description',
        seo_title: 'mock title',
    },
    title: 'mock title',
    featured_image: null,
    content: [
        {
            title: 'Test',
            text: 'Hello from Page!',
        }
    ]
};
