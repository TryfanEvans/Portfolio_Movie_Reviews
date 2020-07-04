export default function (state = '', action) {
    switch (action.type) {
        case "NEWEST":
            return action.payload[0];
        default:
            return ""
    }

}