'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SectionTitle } from '@/components/cards';

export default function Awards() {
  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-background to-primary/5 min-h-screen flex flex-col">
        <section className="border-b border-border flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-6xl px-6 py-20 w-full">
            <div className="flex flex-col items-center justify-center text-center">
              <SectionTitle 
                title="Awards"
                description="Recognition and achievements coming soon"
              />
              
              <div className="mt-16 space-y-6">
                <div className="inline-block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-xl"></div>
                    <div className="relative bg-card border border-border rounded-lg px-8 py-12">
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        Coming Soon<span className="text-primary">.</span>
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        Showcasing awards, certifications, and professional recognition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
