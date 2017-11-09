const init = [
    {
        id: '1',
        title: 'Lorem Ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper enim nulla, ut pulvinar orci consequat vel. Phasellus elementum sollicitudin fringilla. Praesent sem purus, ultrices ac feugiat ac, aliquam quis sem. Curabitur fermentum tellus a vestibulum dignissim. Aliquam diam augue, facilisis non mollis vitae, mattis sodales urna. Cras imperdiet molestie ultricies. Pellentesque pretium non urna at laoreet. Pellentesque ut dictum odio, et tristique nibh. Praesent nec nunc a massa auctor venenatis. In placerat tortor nisi, a condimentum augue bibendum a. Etiam pharetra libero maximus libero vulputate, at dignissim risus aliquet. Nulla in iaculis elit.',
    },
]

export default (state = init, action) => {
    switch(action.type) {
        default: {
            return state
        }
    }
} 