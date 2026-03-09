import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Guides et conseils travaux maison",
  description:
    "Articles, guides et conseils pour vos travaux : prix, reglementation, depannage. Plomberie, chauffage, nuisibles, volets roulants...",
};

export default function BlogPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Blog &amp; Guides
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Conseils, guides de prix et informations pratiques pour tous vos
            travaux et depannages a la maison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm text-blue-600 font-medium flex items-center gap-1">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
