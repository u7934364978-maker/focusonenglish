// ============================================
// SUPABASE CLIENT
// Cliente de Supabase para autenticación y base de datos
// ============================================

import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nprqtjljoekoirlrjxlh.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcnF0amxqb2Vrb2lybHJqeGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NTMzNzcsImV4cCI6MjA4NDIyOTM3N30.GdTvAPa08RiadT-yxbGHOGPDz1baypAOeDDezqyFJNA';

console.log('Supabase Browser Client Initializing with URL:', supabaseUrl);

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
