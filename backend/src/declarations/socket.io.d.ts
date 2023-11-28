declare module 'socket.io' {
    export interface Socket {
      id: string;
      emit(event: string, ...args: any[]): void;
      on(event: string, callback: (...args: any[]) => void): void;
      
    }
  
    export interface Server {
      on(event: 'connection', callback: (socket: Socket) => void): void;
     
    }
  
    
  }
  