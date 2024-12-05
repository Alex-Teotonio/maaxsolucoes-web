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

export interface Event {
  id: string;
  nome: string;
  descrição: string;
  data: Date;
  local: string;
  imagem: string;
  categoria: string;
  criadorId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Função para criar um evento
export const createEvent = async (eventData: {
  nome: string;
  descrição: string;
  data: Date;
  local: string;
  imagem: string;
  categoria: string;
  criadorId: string;
}) => {
  try {
    const docRef = await addDoc(collection(firestore, "events"), {
      ...eventData,
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
export const getAllEvents = async () => {
  try {
    const q = query(collection(firestore, "events"), orderBy("data", "asc"));
    const querySnapshot = await getDocs(q);
    const events = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
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
) => {
  try {
    const eventRef = doc(firestore, "events", eventId);
    await updateDoc(eventRef, {
      ...updatedData,
      updatedAt: Timestamp.fromDate(new Date()),
    });
  } catch (error) {
    console.error("Erro ao atualizar evento:", error);
    throw error;
  }
};

// Função para deletar um evento
export const deleteEvent = async (eventId: string) => {
  try {
    await deleteDoc(doc(firestore, "events", eventId));
  } catch (error) {
    console.error("Erro ao excluir evento:", error);
    throw error;
  }
};
