import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// application alert system using react-toastify
// the function takes in one input, which is the text that you would like to display
// in the alert message
export const successToast = (message) => {
    toast.success(
        <div>
            {' '}
            <span>{` ${message}`}</span>
        </div>,
    );
};

export const errorToast = (message) => {
    toast.error(
        <div>
            {' '}
            <span>{` ${message}`}</span>
        </div>,
    );
};

successToast.propTypes = {
    message: PropTypes.string,
};

errorToast.propTypes = {
    message: PropTypes.string,
};
