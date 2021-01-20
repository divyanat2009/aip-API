INSERT INTO aip_users(fullname,username,password,date_created)
VALUES
('Divya Natarajan', 'divyanat','Genericpass123!',now() - '0 days'::INTERVAL),
('Danerys Targerean', 'dtarg','Genericpass123!',now() - '0 days'::INTERVAL),
('Utred Ragnarson', 'uragnar', 'Genericpass123!',now() - '0 days'::INTERVAL),
('Billy Strings', 'bstrings', 'needBetterPass2@',now() - '0 days'::INTERVAL),
('Eddie Roberts', 'funkguitar', 'imissmusic4!',now() - '0 days'::INTERVAL)
;