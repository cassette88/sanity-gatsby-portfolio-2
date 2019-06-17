export default {
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string'
      },
      {
        title: 'Description',
        name: 'description',
        type: 'string'
      },
      {
        title: 'Price',
        name: 'price',
        type: 'number'
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Name of auto-generated product page',
        options: {
            source: 'title',
            maxLength: 96
        }
      }
    ]
}