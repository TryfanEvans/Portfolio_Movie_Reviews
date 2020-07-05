export default function (state = [], action) {
    console.log(action.payload);
    switch (action.type) {
        case "SEARCH":
            return action.payload
        default:
            return ""
    }

}