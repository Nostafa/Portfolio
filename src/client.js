import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'yw8ob8l0',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skgA5CUabuLVBmtDT5kBEi0dcSyQENTW9byAeSHjZXIOl49js9rY5s9dczDEvxFsEAcr8LhtKGA9JiX1jmGERb6KECcofVLfCTwGdAMBBciwi0jxnz8SXdxiTQvesFQz7OfaPgRmuyK9lCnYKKGEXU80AH8XueN1WJ1BwDJAJPgZyIDI03ll'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);