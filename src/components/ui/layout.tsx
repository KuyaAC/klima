import type { PropsWithChildren } from "react";
import Header from "./header";
import { CopyrightIcon } from "lucide-react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur py-6 supports-[backdrop-filter]:bg-background/60 text-center">
        <div className="container mx-auto px-4 text-gray-400 ">
          <p className="flex items-center space-x-2 text-center">
            <CopyrightIcon className="w-5 h-5 text-gray-700 text-center" />
            <span>Made by Allen Carl Delas Alas</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
