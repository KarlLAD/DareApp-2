import {createSlice} from '@reduxjs/toolkit';

// initialisation de la liste des joueurs
const initState = {
  players: [
    {id: 1, name: 'Ludmilla', tod :[]},
    {id: 2, name: 'Hervé', tod :[]},
    {id: 3, name: 'Anne', tod :[]},
    {id: 4, name: 'Karl', tod :[]},
  ],
  position: 0,
};

export const player = createSlice({
  name: 'player',
  initialState: initState,
  reducers: {
    // ajouter un joueur
    addPlayer: (state, action) => {
      console.log('action.payload : ', action.payload);

      //ajoute un élément à la fin d'un tableau et retourne la nouvelle
      state.players.push(action.payload);

      return state;
    },

    // effacer un joueur
    delPlayer: (state, action) => {
      // filter la donnée
      const newPlayer = state.players.filter(
        item => item.id != action.payload.id,
      );

      console.log('newPlayer', newPlayer);

      // reformatage de la donnée  avec la position
      const newState = {
        players: newPlayer,
        position: state.position,
      };

      //recherche l'index de l'élément à supprimer

      // console.log("newPlayer : " , newPlayer);

      return state;
    },

    // remise à zéro de la liste des joueur
    resetPlayer: (state, action) => {
      console.log('nou ka vidé sa');

      return initState;
    },
    // next
    nextPlayer: (state, action) => {
      console.log('action.payload', action.payload);

      const newState = {...state, position: action.payload};

      return newState;
    },

    //update
    updateTod: (state, action) => {
      // console.log("prev state");
      console.log("action.payload", action.payload);
      // console.log("first :", state.players[state.position]);
      
      // envoyer dans la tab tod la dernière ligne, je push
      state.players[state.position].tod.push(action.payload);

      // console.log('next state', state);
    },
  },
});

export const {addPlayer, delPlayer, resetPlayer, nextPlayer, updateTod } = player.actions;

export default player.reducer;
