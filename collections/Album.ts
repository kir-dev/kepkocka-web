import type { CollectionConfig } from 'payload'

export const Album: CollectionConfig = {
    slug: 'album',
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
            name: 'pictures',
            label: 'Pictures',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                }
                ]
        }
    ],
}
