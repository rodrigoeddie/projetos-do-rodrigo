
export const state = () => ({
    list: [
        {
            slug: 'projeto-01',
            name: 'projeto 01',
            thumb: 'https://images.pexels.com/photos/3849373/pexels-photo-3849373.jpeg?auto=compress&cs=tinysrgb&w=500',
            year: '2009',
        },
        {
            slug: 'projeto-02',
            name: 'projeto 02',
            thumb: 'https://images.pexels.com/photos/3849373/pexels-photo-3849373.jpeg?auto=compress&cs=tinysrgb&w=500',
            year: '2009',
        },
        {
            slug: 'projeto-03',
            name: 'projeto 03333',
            thumb: 'https://images.pexels.com/photos/3849373/pexels-photo-3849373.jpeg?auto=compress&cs=tinysrgb&w=500',
            year: '2009',
        },
    ],
});

export const getters =  {
    getProject: (state) => (slug) => {
      return state.list.find(project => project.slug === slug)
    }
}
