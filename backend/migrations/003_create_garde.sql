CREATE TABLE garde (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pharmacie_id    UUID NOT NULL REFERENCES pharmacie(id),
  semaine_debut   TIMESTAMP WITH TIME ZONE NOT NULL,
  semaine_fin     TIMESTAMP WITH TIME ZONE NOT NULL,
  source          VARCHAR(100) DEFAULT 'admin_manuel',
  created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index sur la période — requête la plus fréquente du système
CREATE INDEX idx_garde_periode
ON garde(semaine_debut, semaine_fin);

-- Index sur pharmacie_id — utilisé dans les JOINs
CREATE INDEX idx_garde_pharmacie
ON garde(pharmacie_id);