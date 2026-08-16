-- Active la recherche par similarité de texte (tolère les fautes de frappe)
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Index optimisé pour les recherches de similarité sur le nom des pharmacies
CREATE INDEX idx_pharmacie_nom_trgm
ON pharmacie USING GIN (nom gin_trgm_ops);