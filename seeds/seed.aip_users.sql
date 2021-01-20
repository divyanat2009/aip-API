INSERT INTO aip_users(user_id,fullname,username,password,date_created)
VALUES
('1','Divya Natarajan', 'divyanat','Genericpass123!',now() - '0 days'::INTERVAL),
('2','Daenerys Targaryen', 'dtarg','Genericpass123!',now() - '0 days'::INTERVAL),
('3','Uhtred Ragnarsson', 'uragnar', 'Genericpass123!',now() - '0 days'::INTERVAL)
;
