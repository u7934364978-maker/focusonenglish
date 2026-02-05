"use client";

import React, { useState } from 'react';
import { Navigation } from "@/components/sections/Navigation";
import { Mail, User, Briefcase, Building, Phone, Globe, Copy, Check, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function EmailSignatureGenerator() {
  const [formData, setFormData] = useState({
    name: 'Tu Nombre',
    position: 'Tu Cargo (ej. Project Manager)',
    company: 'Tu Empresa',
    phone: '+34 600 000 000',
    website: 'www.tuempresa.com',
    email: 'tu@email.com',
    signOff: 'Kind regards,'
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const signatureElement = document.getElementById('signature-preview');
    if (signatureElement) {
      const range = document.createRange();
      range.selectNode(signatureElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      
      setCopied(true);
      toast.success("¡Firma copiada al portapapeles!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-slate-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4">
              Generador de Firmas de <span className="text-coral-500">Email en Inglés</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Crea tu firma profesional en segundos con los términos correctos y un diseño limpio. ¡Totalmente gratis!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Info className="text-coral-500 w-5 h-5" />
                Tus datos profesionales
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Cargo (en inglés)</Label>
                    <Input 
                      id="position" 
                      placeholder="ej. Sales Executive"
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input 
                    id="company" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Sitio Web</Label>
                  <Input 
                    id="website" 
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signOff">Despedida Profesional</Label>
                  <select 
                    id="signOff"
                    className="w-full p-2 border border-slate-200 rounded-lg bg-white"
                    value={formData.signOff}
                    onChange={(e) => setFormData({...formData, signOff: e.target.value})}
                  >
                    <option value="Kind regards,">Kind regards, (Estándar/Formal)</option>
                    <option value="Best regards,">Best regards, (Muy común)</option>
                    <option value="Sincerely,">Sincerely, (Formal/Tradicional)</option>
                    <option value="Best,">Best, (Semi-formal)</option>
                    <option value="Many thanks,">Many thanks, (Agradecimiento)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-dashed border-coral-200 relative">
                <div className="absolute top-4 right-6 text-xs font-bold text-coral-400 uppercase tracking-widest">
                  Vista Previa
                </div>

                <div id="signature-preview" className="font-sans py-4" style={{ color: '#334155', lineHeight: '1.5' }}>
                  <p style={{ margin: '0 0 16px 0', fontSize: '16px' }}>{formData.signOff}</p>
                  
                  <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: 'middle' }}>
                    <tr>
                      <td style={{ paddingRight: '15px' }}>
                        <div style={{ width: '48px', height: '48px', backgroundColor: '#FF6B6B', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center', textAlign: 'center' }}>
                          <span style={{ color: 'white', fontWeight: 'bold', width: '100%', fontSize: '20px' }}>
                            {formData.name.charAt(0)}
                          </span>
                        </div>
                      </td>
                      <td style={{ borderLeft: '2px solid #F1F5F9', paddingLeft: '15px' }}>
                        <p style={{ margin: '0', fontWeight: 'bold', fontSize: '18px', color: '#0F172A' }}>{formData.name}</p>
                        <p style={{ margin: '0', fontSize: '14px', color: '#64748B' }}>{formData.position} | <strong>{formData.company}</strong></p>
                        
                        <div style={{ marginTop: '10px', fontSize: '13px', color: '#64748B' }}>
                          <p style={{ margin: '2px 0' }}>📧 {formData.email}</p>
                          <p style={{ margin: '2px 0' }}>📞 {formData.phone}</p>
                          <p style={{ margin: '2px 0' }}>🌐 {formData.website}</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                  
                  <div style={{ marginTop: '20px', fontSize: '11px', color: '#94A3B8', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                    <p style={{ margin: '0' }}>Este email ha sido enviado de forma segura. Mejora tu inglés profesional con Focus English.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Button 
                    onClick={handleCopy}
                    className="w-full bg-coral-600 hover:bg-coral-700 text-white font-bold py-6 rounded-xl text-lg flex items-center justify-center gap-2"
                  >
                    {copied ? <Check /> : <Copy />}
                    {copied ? '¡Copiado!' : 'Copiar Firma para Gmail/Outlook'}
                  </Button>
                </div>
              </div>

              {/* Tips for Link Magnet */}
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">¿Por qué es importante?</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    En el mundo anglosajón, la firma de email es tu tarjeta de presentación. Usar los términos correctos (*Position* vs *Job*, *Kind regards* vs *Best regards*) demuestra profesionalidad y dominio del idioma desde el primer contacto.
                  </p>
                  <Link href="/blog/trabajo/emails-profesionales-ingles" className="text-coral-400 font-bold hover:underline inline-flex items-center gap-1">
                    Leer guía de emails <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* SEO Content for the Tool Page */}
          <section className="mt-24 prose prose-slate prose-lg max-w-none bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Cómo usar las firmas de correo en inglés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">La Despedida (The Sign-off)</h3>
                <p className="text-slate-600">
                  No todas las despedidas son iguales. **"Sincerely"** es muy formal y se usa poco en emails diarios. **"Kind regards"** es la apuesta más segura en el entorno corporativo de UK y Europa, mientras que en USA **"Best regards"** es extremadamente común.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cargos Profesionales</h3>
                <p className="text-slate-600">
                  Traducir cargos literalmente es un error común. Por ejemplo, "Director" en inglés suele ser **"Manager"** o **"Head of"** si no eres el dueño de la empresa. Nuestra herramienta te ayuda a usar la terminología que los reclutadores internacionales esperan ver.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
