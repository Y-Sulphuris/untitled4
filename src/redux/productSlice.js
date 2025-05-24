const initialState = [
    {id: 1, title: 'Велосипед', count: 5},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
];

const ADD = 'ADD';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state.map(item =>
                item.id === action.payload && item.count < 25
                    ? {...item, count: item.count + 1}
                    : item
            );

        case DECREMENT:
            return state
                .map(item =>
                    item.id === action.payload
                        ? {...item, count: item.count - 1}
                        : item
                )
                .filter(item => item.count > 0);

        case ADD:
            const newId = state.length ? Math.max(...state.map(i => i.id)) + 1 : 1;
            return [
                ...state,
                {id: newId, title: action.payload, count: 1}
            ];

        default:
            return state;
    }
};

export const increment = id => ({type: INCREMENT, payload: id});
export const decrement = id => ({type: DECREMENT, payload: id});
export const addItem = title => ({type: ADD, payload: title});
