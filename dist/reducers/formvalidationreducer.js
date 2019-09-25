export const HAS_ERROR = "HAS_ERROR";
export const HAS_NO_ERROR = "HAS_NO_ERROR";

const FormValidationReducer = (state, action) => {
  const formErrors = { ...state
  };
  const {
    type,
    field
  } = { ...action
  };

  switch (type) {
    case HAS_ERROR:
      formErrors[field] = true;
      break;

    case HAS_NO_ERROR:
      formErrors[field] = false;
      break;
  }

  return formErrors;
};

export default FormValidationReducer;