CREATE DATABASE user_db;
USE user_db;

CREATE TABLE userInfo(
id INT AUTO_INCREMENT NOT NULL,
email VARCHAR(100),
pswd VARCHAR(100),
PRIMARY KEY (id)
);

CREATE TABLE apiKeys(
id INT AUTO_INCREMENT NOT NULL, 
apikey VARCHAR(100),
PRIMARY KEY(id)
);

INSERT INTO userInfo (email, pswd) values ("example@email.com", "password");
INSERT INTO apiKeys (apiKey) values ("acef062b396a4219a8e009b9395a424d");
