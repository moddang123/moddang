export const initialState = {
    mainPosts: [{
        User: {
            id: 'id몽땅',
            nickname: '몽땅이',
        },
        content: 'Movie : About Time',
        img: 'https://i.pinimg.com/originals/01/78/9c/01789c4656b4348a2e501089288eeb51.jpg',
    }],
    imagePath: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};
const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 'love',
        User: {
            nickname: '럽',
        }
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            return{
                ...state,
            };
        }
        case ADD_DUMMY: {
            return{
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;