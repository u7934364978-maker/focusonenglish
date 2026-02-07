import Link from "next/link";
import Image from "next/image";
import { BlogPost, slugify } from "@/lib/blog";

interface TopicClusterLinksProps {
  articles: BlogPost[];
  mainKeyword?: string;
}

export function TopicClusterLinks({ articles, mainKeyword }: TopicClusterLinksProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="my-16 border-t border-slate-100 pt-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 16.2V21m0 0h4.8M3 21l6-6"/><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/><path d="M3 7.8V3m0 0h4.8M3 3l6 6"/></svg>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-slate-900">Lecturas recomendadas sobre este tema</h2>
          <p className="text-slate-500 text-sm">Explora más recursos para dominar {mainKeyword || 'esta área'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link 
            key={article.slug}
            href={`/blog/${article.category}/${article.slug}`}
            className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {article.image && (
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.alt || article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-4 flex-1">
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-coral-600 transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{article.category}</span>
                <span className="text-coral-500 font-bold text-xs group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {mainKeyword && (
        <div className="mt-8 text-center">
          <Link 
            href={`/blog/temas/${slugify(mainKeyword)}`}
            className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:underline"
          >
            <span>Ver todo sobre {mainKeyword}</span>
            <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
