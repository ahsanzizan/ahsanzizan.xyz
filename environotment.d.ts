declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      MONGO_URI: string;
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;
      PORT?: string;
    }
  }
}

export {};
