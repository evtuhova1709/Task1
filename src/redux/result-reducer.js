const SET_RESULT = 'SET_USERS';

let initialState = {
    result: [
        { id: 1, name: 'Liza Petrova', avatarUrl: 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 2, name: 'Oleg Katsurin', avatarUrl: 'https://klike.net/uploads/posts/2020-08/1597994286_2.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 3, name: 'Anna Ivanova', avatarUrl: 'https://likeyou.io/wp-content/uploads/2019/02/Snimok-ekrana-2019-02-15-v-16.03.56.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 4, name: 'Sergey Yo', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 5, name: 'Misha Rolovon', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 6, name: 'Harry', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 7, name: 'Amelia Pitsoy', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 8, name: 'James', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 9, name: 'Frinsssss', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 10, name: 'Hahah154', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 11, name: 'Love34', avatarUrl: 'https://lingualeo.com/ru/blog/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png', nextPageUrl: '', previosPageUrl: '' },
        { id: 12, name: 'Polona Evtukhova', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 13, name: 'Aleno4ka', avatarUrl: 'https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/02/b3b8e090da2368d90cde56435ecc0210.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 14, name: 'Antont', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 15, name: 'Lora M', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 16, name: 'Ylik', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 17, name: 'Noname', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 18, name: 'User23', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 19, name: 'Stefani', avatarUrl: 'https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/02/b3b8e090da2368d90cde56435ecc0210.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 20, name: 'Frrrr', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 21, name: 'Freko', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 22, name: 'Arturoooooooo', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 23, name: 'Bot', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 24, name: 'Lert Udms', avatarUrl: 'https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/02/b3b8e090da2368d90cde56435ecc0210.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 25, name: 'Pop Smith', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 26, name: 'Etre ', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 27, name: 'Frokn JJJ', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 28, name: 'Omalla', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 29, name: 'Yhyyyyyyyy', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' },
        { id: 29, name: 'Frinsooo', avatarUrl: 'https://i.ytimg.com/vi/2giQVPIl9JM/maxresdefault.jpg', nextPageUrl: '', previosPageUrl: '' }



    ],
    pageSize: 3,
    totalUsersCount: 30,
    currentPage: 1,


}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT:

            return { ...state, result: action.result }
        default:
            return state;
    }



}


export const setResultAC = (result) => ({ type: 'SET_RESULT', result })

export default userReducer;