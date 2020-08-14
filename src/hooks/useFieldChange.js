const isFunc = (val) => typeof val === 'function';

const useFieldChange = (setState) => (fieldName) => (fieldValue) => {
    setState((state) => ({
        ...state,
        [fieldName]: isFunc(fieldValue) ? fieldValue(state[fieldName]) : fieldValue,
    }));
};

export default useFieldChange;
