const APPLY_SETTINGS = "Counter/APPLY-SETTINGS";
const INCREMENT_NUMBER = "Counter/INCREMENT-NUMBER";
const DEFAULT_NUMBER = "Counter/DEFAULT-NUMBER";

let initialState = {
    counter: {
        currentValue: 0,
        maxValue: 5,
        minValue: 0,
    }
};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_SETTINGS :
            return {
                ...state,
                counter: {
                    ...state.counter,
                    maxValue: action.maxValue,
                    minValue: action.minValue,
                    currentValue: action.minValue,
                }
            };
        case INCREMENT_NUMBER :
            return {
                ...state, counter: {
                    ...state.counter, currentValue: action.currentValue
                }
            };
        case DEFAULT_NUMBER :
            return {
                ...state, counter: {...state.counter, currentValue: action.minValue}
            };
        default: {
            return state
        }
    }
};

export const applySettingsAC = (minValue, maxValue,) => {
    return {
        type: APPLY_SETTINGS, minValue, maxValue
    }
};

export const incrementNumberAC = (currentValue) => {
    return {
        type: INCREMENT_NUMBER, currentValue,
    }
};

export const defaultNumberAC = (minValue) => {
    return {
        type: DEFAULT_NUMBER, minValue
    }
};

export default reducer;