import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { BaseEntity } from "../types/redux/generic";
import { db } from "../repositories/firebase";

class GenericService {

    static async Add(newEntity: any, collectionName: string){
        try{
            const {cod, store, employee, employeeName, employeeStoreName, ...data} = newEntity;
            const response = await addDoc(collection(db, collectionName), data);
            return true;
        } catch (error) {
            console.log(`Erro ao criar:\n${error}`)
            return false;
        }
    }

    static async Update(entityToUpdate: any, collectionName: string){
        try{
            const {cod, store, employee, employeeName, employeeStoreName, ...data} = entityToUpdate;
            if(cod == null) throw "Código da entidade nulo"; 
            const entityRef = doc(db, collectionName, cod);
            await updateDoc(entityRef, data);

            return true;
        } catch (error) {
            console.log(`Erro ao editar:\n${error}`)
            return false;
        }
    }

    static async Remove(entityCodToRemove: string, collectionName: string){
        try{
            if(entityCodToRemove == null) throw "Código da entidade nulo"; 
            const entityRef = doc(db, collectionName, entityCodToRemove);
            await deleteDoc(entityRef);

            return true;
        } catch (error) {
            console.log(`Erro ao remover:\n${error}`)
            return false;
        }
    }

    static async GetAll(collectionName: string){
        try{
            const response: any[] = [];
            const querySnapshot = await getDocs(collection(db, collectionName));
            
            querySnapshot.forEach((doc) => {
                response.push({ cod: doc.id, ...doc.data() } as any);
            })

            return response;
        } catch (error) {
            console.error("Erro ao buscar entidades:", error);
            return [];
        }
    }
}

export default GenericService;