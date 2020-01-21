import { Page } from '../../../entities/page';

export const HOME_MOCK: Page = {
    id: 'asda',
    seo_meta: {
        seo_description: 'mock description',
        seo_title: 'mock title',
    },
    title: 'mock title',
    featured_image: null,
    content: [
        {
            title: 'Test',
            text: 'Hello from my-test-project!',
        }
    ],
};
