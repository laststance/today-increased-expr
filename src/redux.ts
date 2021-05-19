import { Action, Reducer, createStore } from 'redux'

/**
 * ============================================================
 * State
 * ============================================================
 */
export interface ReduxState {
  isNewSignup: boolean
  isLogin: boolean
}

/**
 * ============================================================
 * Action
 * ============================================================
 */
export interface SignupAction extends Action<'SIGNUP'> {
  type: 'SIGNUP'
}

export interface CloseSignupSnackbarAction
  extends Action<'CLOSE_SIGINUP_SNACKBAR'> {
  type: 'CLOSE_SIGINUP_SNACKBAR'
}

export interface LoginAction extends Action<'LOGIN'> {
  type: 'LOGIN'
}

export interface LogoutAction extends Action<'LOGOUT'> {
  type: 'LOGOUT'
}

type MyAppAction =
  | LoginAction
  | LogoutAction
  | SignupAction
  | CloseSignupSnackbarAction

/**
 * ============================================================
 * Reducer
 * ============================================================
 */
const reducer: Reducer<ReduxState | undefined, MyAppAction> = (
  state = { isSignup: false, isLogin: false },
  action
) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: true }

    case 'LOGOUT':
      return { ...state, isLogin: false }

    case 'SIGNUP':
      return { ...state, isNewSignup: true }

    case 'CLOSE_SIGINUP_SNACKBAR':
      return { ...state, isNewSignup: false }

    default:
      return state
  }
}

export const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)