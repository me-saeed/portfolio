type PdfFit = "width" | "page";

/** PDF embed URL tuned for inline preview (card thumbnails). */
export function pdfThumbnailSrc(document: string, fit: PdfFit = "width"): string {
  const view = fit === "width" ? "FitH" : "Fit";
  return `${document}#toolbar=0&navpanes=0&scrollbar=0&view=${view}&zoom=page-width`;
}

/** PDF embed URL for the full-screen viewer. */
export function pdfModalSrc(document: string): string {
  return `${document}#toolbar=1&navpanes=0&scrollbar=0&view=FitH&zoom=page-width`;
}

type PdfThumbnailProps = {
  document: string;
  className?: string;
  fit?: PdfFit;
};

/** Inline PDF thumbnail — sized to its container width. */
export function PdfThumbnail({ document, className = "", fit = "width" }: PdfThumbnailProps) {
  return (
    <iframe
      src={pdfThumbnailSrc(document, fit)}
      title=""
      tabIndex={-1}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full max-w-full border-0 pointer-events-none ${className}`}
    />
  );
}

type PdfViewerModalProps = {
  title: string;
  subtitle: string;
  document: string;
  linkHref?: string;
  linkLabel?: string;
  onClose: () => void;
};

export function PdfViewerModal({
  title,
  subtitle,
  document,
  linkHref,
  linkLabel = "Open",
  onClose,
}: PdfViewerModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-black/70 p-2 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — ${subtitle}`}
      onClick={onClose}
    >
      <div
        className="mx-auto flex h-full min-h-0 w-full min-w-0 max-w-full flex-col sm:max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 flex-col gap-3 rounded-t-2xl border border-border bg-background px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight">{title}</p>
            <p className="truncate text-xs text-muted">{subtitle}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
            {linkHref && (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                {linkLabel}
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M6.5 9.5 14 2M14 2H9.5M14 2v4.5M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="m4 4 8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 w-full min-w-0 overflow-hidden rounded-b-2xl border border-t-0 border-border bg-white">
          <iframe
            src={pdfModalSrc(document)}
            title={`${title} — ${subtitle}`}
            className="h-full w-full max-w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export function PdfIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 2.5h8L19 7v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4a1.5 1.5 0 0 1 1-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 2.5V7h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 13h7M8.5 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
