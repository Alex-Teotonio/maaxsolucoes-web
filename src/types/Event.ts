// types/Event.ts
export interface Event {
  id: string;
  nome: string;
  descrição: string;
  data: {
    seconds: number;
    nanoseconds: number;
  };
  local: string;
  imagem: string;
  categoria: string;
  criadorId: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
}
