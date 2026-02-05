import { supabaseAdmin } from '@/lib/supabase/client';
import { notFound } from 'next/navigation';
import Certificate from '@/components/certification/Certificate';

interface CertificatePageProps {
  params: {
    id: string;
  };
}

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { id } = params;

  if (!supabaseAdmin) {
    return <div>Configuration error: Supabase Admin not available.</div>;
  }

  // 1. Fetch certificate data
  const { data: cert, error: certError } = await supabaseAdmin
    .from('certifications')
    .select('*')
    .eq('id', id)
    .single();

  if (certError || !cert) {
    return notFound();
  }

  // 2. Fetch user data
  const { data: user, error: userError } = await supabaseAdmin
    .from('users')
    .select('name')
    .eq('id', cert.user_id)
    .single();

  const userName = user?.name || 'Estudiante de Focus English';
  
  // Format data for the component
  const courseName = cert.exam_type.startsWith('Specialization: ') 
    ? cert.exam_type.replace('Specialization: ', '').toUpperCase() + ' English'
    : cert.exam_type;

  const date = new Date(cert.issued_at).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <Certificate
        userName={userName}
        courseName={courseName}
        level={cert.level}
        date={date}
        certificateId={cert.id.substring(0, 8).toUpperCase()}
        score={cert.score || 100}
      />
    </div>
  );
}
