"use client";

interface ShareButtonProps {
  title: string;
  description: string;
}

export function ShareButton({ title, description }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      });
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="text-sm text-violet-600 font-semibold hover:text-violet-700"
    >
      Compartir 🔗
    </button>
  );
}
