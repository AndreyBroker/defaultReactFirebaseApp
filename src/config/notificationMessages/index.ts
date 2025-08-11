import { GenericErrorMsg, GenericSuccessMsg } from "./generic";

export default class NotificationMessage {
    static readonly generic = {
        success: new GenericSuccessMsg(),
        error: new GenericErrorMsg()
    }
}