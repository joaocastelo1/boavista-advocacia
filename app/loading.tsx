import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="size-10 animate-spin text-gold-400" aria-hidden="true" />
        <span className="font-cinzel text-sm tracking-[0.3em] text-muted-foreground uppercase">
          Carregando
        </span>
      </div>
    </div>
  );
}
