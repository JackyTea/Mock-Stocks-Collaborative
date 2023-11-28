export interface Stock {
    id: string;
    currentPrice: number;
    
  }
  
  export interface ServerToClientEvents {
    [key: string]: (...args: unknown[]) => void;
    
  }
  
    export interface ClientToServerEvents {
        [key: string]: (...args: unknown[]) => void;
        
    }
