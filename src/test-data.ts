import { TagType, NoteType } from './types';

export const tags: TagType[] = [
    {
        slug: 'meme',
        name: 'Meme',
        color: 'blue'
    },
    {
        slug: 'link',
        name: 'Link',
        color: 'green'
    }
];

export const notes: NoteType[] = [
    {
        title: 'Hello World',
        permalink: '/hello-world',
        body: 'A test note',
        tags: []
    },
    {
        title: 'URL Test',
        permalink: '/url-test',
        body: 'https://www.the-tls.co.uk/articles/public/when-dickens-met-dostoevsky/',
        tags: [tags[1]]
    },
    {
        title: 'Image URL Test',
        permalink: '/image-url-test',
        body: 'https://i.imgur.com/Bam50yB.jpg',
        tags: [tags[0]]
    }
];
