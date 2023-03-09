INSERT INTO users (name, email, password)
VALUES ('Florence Pugh', 'flo@gmail.pom', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Cillian Murphy', 'cilly@hotmail.pom', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Sharon Horgan', 'Shar@gmail.pom' , '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES ('Cozy Cabin', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350' , 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 30, 2, 1, 3, 'Canada', 'Cabin Street', 'Cabin City', 'BC', 'V5M 1F4', TRUE),
('Modern Vista', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350' , 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 60, 3, 2, 1, 'Ireland', 'Modern Street', 'Cavan City', 'CAV', 'CAV 123', TRUE),
('Villa', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350' , 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 100, 4, 3, 6, 'Spain', 'Villa Street', 'Villa City', 'ES', 'ESP 123', TRUE);

INSERT INTO reservations (start_date, end_date)
VALUES ('2018-02-12', '2019-01-10'),
('2022-09-02', '2022-11-16'),
('2023-02-01', '2023-03-01');

INSERT INTO property_reviews (rating, message)
VALUES (4.5, 'message'),
(2, 'message'),
(2, 'message');