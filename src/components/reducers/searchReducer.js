export default function (state = '', action) {
    console.log(action.type);
    switch (action.type) {
        case "SEARCH":
            return action.payload
        default:
            return ""
    }

}