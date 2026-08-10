INSERT INTO garde (pharmacie_id, semaine_debut, semaine_fin)
VALUES ((SELECT id FROM pharmacie WHERE nom = 'De La Paix'), '2026-08-10 08:00:00', '2026-08-17 07:59:59');

INSERT INTO garde (pharmacie_id, semaine_debut, semaine_fin)
VALUES ((SELECT id FROM pharmacie WHERE nom = 'Cité Arconville'), '2026-08-10 08:00:00', '2026-08-17 07:59:59');

INSERT INTO garde (pharmacie_id, semaine_debut, semaine_fin)
VALUES ((SELECT id FROM pharmacie WHERE nom = 'Tranza'), '2026-08-10 08:00:00', '2026-08-17 07:59:59');