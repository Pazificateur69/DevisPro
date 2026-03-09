-- DevisPro Supabase Schema
-- Run this in the Supabase SQL editor to create the necessary tables

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table (customer quote requests)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  service TEXT NOT NULL,
  service_name TEXT NOT NULL,
  description TEXT NOT NULL,
  code_postal VARCHAR(5) NOT NULL,
  telephone VARCHAR(15) NOT NULL,
  email TEXT NOT NULL,
  nom TEXT NOT NULL,
  status TEXT DEFAULT 'nouveau' CHECK (status IN ('nouveau', 'attribue', 'traite')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Artisans table (partner artisans)
CREATE TABLE IF NOT EXISTS artisans (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nom TEXT NOT NULL,
  entreprise TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  telephone VARCHAR(15) NOT NULL,
  metier TEXT NOT NULL,
  code_postal VARCHAR(5) NOT NULL,
  rayon_intervention INTEGER DEFAULT 30,
  siret VARCHAR(14) UNIQUE NOT NULL,
  actif BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lead attributions (mapping leads to artisans, max 3 per lead)
CREATE TABLE IF NOT EXISTS lead_attributions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  artisan_id UUID REFERENCES artisans(id) ON DELETE CASCADE,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(lead_id, artisan_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_service ON leads(service);
CREATE INDEX IF NOT EXISTS idx_leads_code_postal ON leads(code_postal);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_artisans_metier ON artisans(metier);
CREATE INDEX IF NOT EXISTS idx_artisans_code_postal ON artisans(code_postal);
CREATE INDEX IF NOT EXISTS idx_artisans_actif ON artisans(actif);
CREATE INDEX IF NOT EXISTS idx_lead_attributions_lead_id ON lead_attributions(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_attributions_artisan_id ON lead_attributions(artisan_id);

-- Row Level Security (enable as needed)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE artisans ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_attributions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for leads and artisan registrations
CREATE POLICY "Allow anonymous insert leads" ON leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous insert artisans" ON artisans FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated reads for dashboard
CREATE POLICY "Allow anon read leads" ON leads FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon read artisans" ON artisans FOR SELECT TO anon USING (true);
CREATE POLICY "Allow anon read attributions" ON lead_attributions FOR SELECT TO anon USING (true);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER artisans_updated_at BEFORE UPDATE ON artisans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
