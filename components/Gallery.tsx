"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";

type Doc = {
    title: string;
    description: string;
    images: string[];
    pdf?: string;
};

type GalleryProps = {
    docs: Doc[];
    initialIndex: number | null; // Tambahkan prop ini
    labels: {
        previewDocument: string;
        clickToPreview: string;
        previousPage: string;
        nextPage: string;
        pageLabel: string;
        closePreview: string;
    };
};

export default function Gallery({ docs, initialIndex, labels }: GalleryProps) {
    const router = useRouter();
    const pathname = usePathname();

    const [activeDocIndex, setActiveDocIndex] = useState<number | null>(initialIndex);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Sinkronisasi state internal saat initialIndex dari URL berubah
    useEffect(() => {
        setActiveDocIndex(initialIndex);
        setActiveImageIndex(0);
    }, [initialIndex]);

    const open = activeDocIndex !== null;
    const activeDoc = activeDocIndex !== null ? docs[activeDocIndex] : null;
    const hasMultiplePages = activeDoc && activeDoc.images.length > 1;

    function closePreview() {
        setActiveDocIndex(null);
        setActiveImageIndex(0);
        // Hapus query params dari URL untuk menutup modal secara 'Server-Side'
        router.push(pathname, { scroll: false });
    }

    function goToPrevious() {
        if (!activeDoc) return;
        setActiveImageIndex((current) =>
            current === 0 ? activeDoc.images.length - 1 : current - 1
        );
    }

    function goToNext() {
        if (!activeDoc) return;
        setActiveImageIndex((current) =>
            current === activeDoc.images.length - 1 ? 0 : current + 1
        );
    }

    function renderContent() {
        if (!activeDoc) return null;
        if (activeDoc.pdf) {
            return (
                <iframe
                    src={activeDoc.pdf}
                    title={activeDoc.title}
                    className="relative h-[50vh] sm:h-[65vh] w-full"
                    style={{ border: "none" }}
                ></iframe>
            );
        }
        return (
            <motion.div
                key={`${activeDoc.title}-${activeImageIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] w-full"
            >
                <Image
                    src={activeDoc.images[activeImageIndex]}
                    alt={activeDoc.title}
                    fill
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    quality={82}
                    className="object-contain"
                    priority
                />
            </motion.div>
        );
    }

    return (
        <>
            {open && activeDoc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-99 flex items-center justify-center px-4 py-6 bg-gradient-to-b from-black/90 to-black/70"
                >
                    {/* Overlay Click to Close */}
                    <button
                        type="button"
                        aria-label={labels.closePreview}
                        onClick={closePreview}
                        className="absolute inset-0 cursor-default"
                    />

                    <div className="relative z- flex max-h-[98vh] w-full max-w-4xl flex-col rounded-[2rem] border border-white/10 bg-[color:var(--panel)] p-4 shadow-2xl sm:p-6">
                        <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="font-display text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">
                                    {labels.previewDocument}
                                </p>
                                <h2 className="font-display mt-3 text-xl font-semibold text-[color:var(--foreground)] sm:text-3xl">
                                    {activeDoc.title}
                                </h2>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                                    {activeDoc.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 self-start">
                                {!activeDoc?.pdf && (
                                    <div className="whitespace-nowrap rounded-full bg-[color:var(--hero-surface)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)]">
                                        {labels.pageLabel} {activeImageIndex + 1} / {activeDoc.images.length}
                                    </div>
                                )}
                                <button
                                    type="button"
                                    aria-label={labels.closePreview}
                                    onClick={closePreview}
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--foreground)] transition duration-200 hover:-translate-y-0.5"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="relative mt-4 flex-1 overflow-hidden rounded-[1.2rem] border border-[color:var(--border)] bg-black/20">

                            {hasMultiplePages && !activeDoc.pdf ? (
                                <>
                                    <button
                                        type="button"
                                        aria-label={labels.previousPage}
                                        onClick={goToPrevious}
                                        className="absolute left-3 top-1/2 z-5 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition duration-200 hover:scale-105"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label={labels.nextPage}
                                        onClick={goToNext}
                                        className="absolute right-3 top-1/2 z-5 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition duration-200 hover:scale-105"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            ) : null}
                            {renderContent()}
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}