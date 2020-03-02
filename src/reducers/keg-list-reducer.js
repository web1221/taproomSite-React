import {
    v4
} from 'uuid'

const initialState = {
    masterKegList: {}
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_KEG":
            let newKegId = v4();
            let newMasterKegList = Object.assign({}, state.masterKegList, {
                [newKegId]: action.newKeg,
            });
            return newMasterKegList;
        default:
            return state;
    }
}