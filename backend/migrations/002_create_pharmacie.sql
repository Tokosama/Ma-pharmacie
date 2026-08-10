CREATE TABLE pharmacie (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom           VARCHAR(200) NOT NULL,
  adresse       VARCHAR(500) NOT NULL,
  ville_id      UUID NOT NULL REFERENCES ville(id),
  latitude      DECIMAL(10, 8) NOT NULL,
  longitude     DECIMAL(11, 8) NOT NULL,
  location      GEOGRAPHY(POINT, 4326) NOT NULL,
  telephone     VARCHAR(20),
  whatsapp      VARCHAR(20),
  email         VARCHAR(200),
  horaires      JSONB,
  is_active     BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index spatial PostGIS — indispensable pour les requêtes géographiques
CREATE INDEX idx_pharmacie_location
ON pharmacie USING GIST(location);

-- Index sur ville_id — fréquemment utilisé dans les filtres
CREATE INDEX idx_pharmacie_ville
ON pharmacie(ville_id);

