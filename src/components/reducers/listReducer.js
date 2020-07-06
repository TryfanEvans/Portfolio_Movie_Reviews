export default function (state = [], action) {
    switch (action.type) {
        case "LIST":
            return action.payload;
        default:
            return ""
    }

}