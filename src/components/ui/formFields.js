import React from 'react';

const formFields = ({ formData, id, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formData.validation && !formData.valid ? formData.validationMessage : null}
      </div>
    );
    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case 'input':
        formTemplate = (
          <div>
            <input {...formData.config} value={formData.value} onChange={e => change({ e, id })} />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default formFields;
