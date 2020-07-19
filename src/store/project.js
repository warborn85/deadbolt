const UPDATE_FIELD = 'UPDATE_FIELD';
const CANCEL_UPDATE = 'CANCEL_UPDATE';
const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
const GET_PROJECT_RESPONSE = 'GET_PROJECT_RESPONSE';
const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
const ADD_PROJECT_RESPONSE = 'ADD_PROJECT_RESPONSE';

const initialState = {
  name: '',
  description: '',
  isComplete: false,
  projects: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === UPDATE_FIELD) {
    const newState = {...state};
    newState[action.field] = action.value;

    console.log('newstate', newState);
    return {
      ...newState,
    };
  }

  if (action.type === GET_PROJECT_RESPONSE) {
    return {
      ...state,
      projects: [...action.projects],
    };
  }

  if (action.type === ADD_PROJECT_RESPONSE) {
    return {
      ...state,
      projects: [...state.projects, {...action.newProject}],
      name: initialState.name,
      description: initialState.description,
      isComplete: initialState.isComplete,
    };
  }

  if (action.type === CANCEL_UPDATE) {
    return {
      ...state,
      name: initialState.name,
      description: initialState.description,
      isComplete: initialState.isComplete,
    }
  }

  return state;
};

export const actionCreators = {
  updateField: (field, value) => (dispatch) => {
    dispatch({
      type: UPDATE_FIELD,
      field,
      value,
    });
  },
  getProjects: () => (dispatch) => {
    dispatch({
      type: GET_PROJECT_REQUEST,
    });

    dispatch({
      type: GET_PROJECT_RESPONSE,
      projects: [],
    });
  },
  addProject: () => (dispatch, getState) => {
    dispatch({
      type: ADD_PROJECT_REQUEST,
    });

    const { project } = getState();
    const newProject = {
      name: project.name,
      description: project.description,
      isComplete: project.isComplete,
    };

    dispatch({
      type: ADD_PROJECT_RESPONSE,
      newProject,
    });
  },
  cancelUpdate: () => (dispatch) => {
    dispatch({
      type: CANCEL_UPDATE,
    });
  }
};
