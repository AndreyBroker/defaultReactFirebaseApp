import { ShowMessagePayloadType } from "../../types/redux/message";


export class GenericSuccessMsg {
    readonly delete: ShowMessagePayloadType = {
        messageText: "Item deletado com sucesso!",
        messageType: "success"
    }

    readonly create: ShowMessagePayloadType = {
        messageText: "Item criado com sucesso!",
        messageType: "success"
    }

    readonly edit: ShowMessagePayloadType = {
        messageText: "Item editado com sucesso!",
        messageType: "success"
    }
}

export class GenericErrorMsg {
    readonly delete: ShowMessagePayloadType = {
        messageText: "Erro ao deletar o item.",
        messageType: "error"
    }

    readonly create: ShowMessagePayloadType = {
        messageText: "Erro ao criar o item.",
        messageType: "error"
    }

    readonly edit: ShowMessagePayloadType = {
        messageText: "Erro ao editar o item.",
        messageType: "error"
    }

    readonly exist: ShowMessagePayloadType = {
        messageText: "O item já se encontrado no sistema.",
        messageType: "error"
    }
}





