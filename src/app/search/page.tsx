"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { SearchItem, staticSearchIndex } from "@/data/searchIndex";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, ArrowRight } from "lucide-react";

function SearchResults() {
    const searchParams = useSearchParams();
    const q = searchParams.get("q") || "";
    const [results, setResults] = useState<SearchItem[]>([]);

    useEffect(() => {
        if (!q.trim()) {
            setResults([]);
            return;
        }

        const lowerQ = q.toLowerCase();
        const filtered = staticSearchIndex.filter((item) => {
            const matchTitle = item.title.toLowerCase().includes(lowerQ);
            const matchDesc = item.description.toLowerCase().includes(lowerQ);
            const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(lowerQ));

            return matchTitle || matchDesc || matchKeywords;
        });

        setResults(filtered);
    }, [q]);

    if (!q) {
        return (
            <div className="text-center py-20">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-600">
                    Mulai pencarian dengan mengetik kata kunci.
                </h2>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Hasil Pencarian: <span className="text-teal-600">"{q}"</span>
                </h1>
                <p className="text-gray-500 mt-1">
                    Ditemukan {results.length} hasil yang cocok.
                </p>
            </div>

            {results.length === 0 ? (
                <div className="text-center py-16 border rounded-xl bg-gray-50">
                    <p className="text-gray-500 text-lg">
                        Tidak ditemukan hasil untuk "{q}".
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Coba gunakan kata kunci lain seperti "Jurusan", "Pendaftaran", atau "Profil".
                    </p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {results.map((item) => (
                        <Link key={item.id} href={item.url} className="block group">
                            <Card className="hover:shadow-md transition-all border-gray-200 group-hover:border-teal-200">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-gray-400" />
                                            {item.title}
                                        </h3>
                                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-teal-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                    <div className="flex gap-2 flex-wrap">
                                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-500">
                                            {item.category}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-3xl mx-auto px-4">
                <Suspense fallback={<div>Loading search...</div>}>
                    <SearchResults />
                </Suspense>
            </div>
        </div>
    );
}
