import {
    v4
} from 'uuid'



export default function reducer(state = {}, action) {
    switch (action.type) {
        case "ADD_KEG":
            console.log(action);
            const id = v4();
            let newMasterKegList = Object.assign({}, state, {
                [id]: {
                    names: action.names,
                    brewery: action.brewery,
                    AlcContent: action.AlcContent,
                    image: action.image,
                }
            });
            console.log(newMasterKegList);
            return newMasterKegList;
        default:
            return state;
    }
};