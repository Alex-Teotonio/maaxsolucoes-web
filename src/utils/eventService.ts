// utils/eventService.ts
import { firestore } from "../firebase-config";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Event } from "@/types/Event"; // Ensure correct import path

// Função para criar um evento
export const createEvent = async (eventData: {
  nome: string;
  descrição: string;
  data: Date;
  local: string;
  imagem: string;
  categoria: string;
  criadorId: string;
}): Promise<string> => {
  try {
    const docRef = await addDoc(collection(firestore, "events"), {
      ...eventData,
      data: Timestamp.fromDate(eventData.data), // Ensure 'data' is stored as Timestamp
      createdAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date()),
    });
    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar evento:", error);
    throw error;
  }
};

// Função para obter todos os eventos
export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const q = query(collection(firestore, "events"), orderBy("data", "asc"));
    const querySnapshot = await getDocs(q);
    const events: Event[] = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        nome: data.nome,
        descrição: data.descrição,
        data: data.data.toDate(), // Convert Timestamp to Date
        local: data.local,
        imagem: data.imagem,
        categoria: data.categoria,
        criadorId: data.criadorId,
        createdAt: data.createdAt.toDate(), // Convert Timestamp to Date
        updatedAt: data.updatedAt.toDate(), // Convert Timestamp to Date
      };
    });
    return events;
  } catch (error) {
    console.error("Erro ao obter eventos:", error);
    throw error;
  }
};

// Função para atualizar um evento
export const updateEvent = async (
  eventId: string,
  updatedData: Partial<{
    nome: string;
    descrição: string;
    data: Date;
    local: string;
    imagem: string;
    categoria: string;
  }>
): Promise<void> => {
  try {
    const eventRef = doc(firestore, "events", eventId);
    const formattedData: any = { ...updatedData };

    if (updatedData.data) {
      formattedData.data = Timestamp.fromDate(updatedData.data);
    }

    await updateDoc(eventRef, {
      ...formattedData,
      updatedAt: Timestamp.fromDate(new Date()),
    });
  } catch (error) {
    console.error("Erro ao atualizar evento:", error);
    throw error;
  }
};

// Função para deletar um evento
export const deleteEvent = async (eventId: string): Promise<void> => {
  try {
    await deleteDoc(doc(firestore, "events", eventId));
  } catch (error) {
    console.error("Erro ao excluir evento:", error);
    throw error;
  }
};
