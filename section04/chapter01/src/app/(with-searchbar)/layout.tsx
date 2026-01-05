import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading Searchbar...</div>}>
        <Searchbar />
        {children}
      </Suspense>
    </div>
  );
}
