import { ArrowArcRight, ArrowRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex flex-1 text-center text-justify p-10 gap-2 text-2xl bold text-gray-200">
            Clique em alguma aula <ArrowRight size={24} />
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
