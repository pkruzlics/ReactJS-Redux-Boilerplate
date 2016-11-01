import types from '../constants/ActionTypes';

import {
  apiGetSettings,
} from '../api/settings.api';

export function changeTitle(title) {
  return function(dispatch) {
    dispatch({
      type: types.CHANGE_TITLE,
      payload: title,
      meta: {
      },
    });
  };
}


function _getSettingsPending() {
  return {
    type: types.GET_SETTINGS_PENDING,
    meta: {
    },
  };
}

function _getSettingsSuccess(json) {
  return {
    type: types.GET_SETTINGS_SUCCESS,
    payload: json,
    meta: {
    },
  };
}

function _getSettingsFailure(ex) {
  return {
    type: types.GET_SETTINGS_FAILURE,
    payload: ex,
    meta: {
    },
    error: true,
  };
}

export function getSettings() {
  return function(dispatch) {

    dispatch(_getSettingsPending());

    return apiGetSettings()
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        json => dispatch(_getSettingsSuccess(json))
      )
      .catch(
        ex => dispatch(_getSettingsFailure(ex))
      );
  };
}
