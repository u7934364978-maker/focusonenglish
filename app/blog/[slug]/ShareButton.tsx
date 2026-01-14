"use client";

interface ShareButtonProps {
  title: string;
  description: string;
}

export function ShareButton({ title, description }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      }).catch(() => {
        // Silently fail if share is cancelled
      });
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="text-sm text-violet-600 font-semibold hover:text-violet-700 cursor-pointer"
      type="button"
    >
      Compartir 🔗
    </button>
  );
}
