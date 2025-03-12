import type { CollectionConfig } from 'payload'

export const Video: CollectionConfig = {
    slug: 'video',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'link',
            label: 'Link',
            type: 'text',
            required: true,
        }
    ],
}
