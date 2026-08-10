INSERT INTO pharmacie (nom, adresse, ville_id, latitude, longitude, location, telephone)
VALUES (
  'De La Paix',
  '9C85+64G, Rue 614B, Cotonou',
  (SELECT id FROM ville WHERE nom = 'Cotonou'),
  6.365707771260702, 2.4077970340837447,
  ST_SetSRID(ST_MakePoint(2.4077970340837447, 6.365707771260702), 4326)::geography,
  NULL
);

INSERT INTO pharmacie (nom, adresse, ville_id, latitude, longitude, location, telephone)
VALUES (
  'Tranza',
  '9J4G+GJX, Parakou',
  (SELECT id FROM ville WHERE nom = 'Parakou'),
  9.356533857616897, 2.626505757166348,
  ST_SetSRID(ST_MakePoint(2.626505757166348, 9.356533857616897), 4326)::geography,
  NULL
);

INSERT INTO pharmacie (nom, adresse, ville_id, latitude, longitude, location, telephone)
VALUES (
  'Le Bon Samaritain',
  'JPR8+J4J, RN2, Lokossa',
  (SELECT id FROM ville WHERE nom = 'Lokossa'),
  6.641917011977833, 1.715269262923997,
  ST_SetSRID(ST_MakePoint(1.715269262923997, 6.641917011977833), 4326)::geography,
  '0167396005'
);

INSERT INTO pharmacie (nom, adresse, ville_id, latitude, longitude, location, telephone)
VALUES (
  'Agbokou',
  'FJCR+RHR, Porto-Novo',
  (SELECT id FROM ville WHERE nom = 'Porto-Novo'),
  6.472425846740232, 2.6413964917569825,
  ST_SetSRID(ST_MakePoint(2.6413964917569825, 6.472425846740232), 4326)::geography,
  '0120214855'
);

INSERT INTO pharmacie (nom, adresse, ville_id, latitude, longitude, location, telephone)
VALUES (
  'De L''Espérance',
  '9CM7+6PQ, Cotonou',
  (SELECT id FROM ville WHERE nom = 'Cotonou'),
  6.383397563276369, 2.414264761069609,
  ST_SetSRID(ST_MakePoint(2.414264761069609, 6.383397563276369), 4326)::geography,
  NULL
);

INSERT INTO pharmacie (nom, adresse, ville_id, latitude, longitude, location, telephone)
VALUES (
  'Cité Arconville',
  'F9F3+4V Arcon-ville lot 11 parcelle k, Abomey-Calavi',
  (SELECT id FROM ville WHERE nom = 'Abomey-Calavi'),
  6.473458287858418, 2.3536474224429114,
  ST_SetSRID(ST_MakePoint(2.3536474224429114, 6.473458287858418), 4326)::geography,
  '0121363276'
);