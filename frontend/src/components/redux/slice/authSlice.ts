import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  email: any | null;
  name: string | null;
  userID: string | null;
}

interface ActiveUser {
  email: string;
  name: string;
  userID: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  email: null,
  name: null,
  userID: null,
};

const authSlice = createSlice({
  // EL reducer se utiliza para actualizar el estado de la aplicación en respuesta a una acción.
  name: "auth",
  initialState,
  reducers: {
      SET_ACTIVE_USER: (state, action: PayloadAction<ActiveUser>) => {        
      //Esta accion actualiza el estado de la aplicación con los datos de un usuario activo.
      const { email, name, userID } = action.payload;
      (state.isLoggedIn = true),
        (state.email = email),
        (state.name = name),
        (state.userID = userID);
      
    },
      REMOVE_ACTIVE_USER: (state, action: PayloadAction<ActiveUser>) => {   
      //Esta accion actualiza el estado de la aplicación con los datos de un usuario activo.
        console.log(action);
        
      (state.isLoggedIn = false),
        (state.email = null),
        (state.name = null),
              (state.userID = null);
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state: { auth: AuthState }) =>
  state.auth.isLoggedIn; //Los selects permiten acceder a partes específicas del estado de la aplicación.
export const selectEmail = (state: { auth: AuthState }) => state.auth.email;
export const selectUserName = (state: { auth: AuthState }) => state.auth.name;
export const selectUserID = (state: { auth: AuthState }) => state.auth.userID;

export default authSlice.reducer;
