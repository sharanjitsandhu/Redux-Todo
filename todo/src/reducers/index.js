import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    { task: "Go for a run", completed: false, id: 0 },
    { task: "Plan this weekend's hike", completed: false, id: 1 },
    { task: "Book dinner reservations", completed: false, id: 2 }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, completed: false, id: Date.now() }
        ]
      };
    default:
      return state;
  }
}

export default reducer;