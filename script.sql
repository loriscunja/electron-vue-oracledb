CREATE TABLE "USERS" (
	"USER_ID" NUMBER NOT NULL,
	"NAME" VARCHAR2(100) NOT NULL,
	"EMAIL" VARCHAR2(100) NOT NULL UNIQUE,
	"USERNAME" VARCHAR2(40) NOT NULL UNIQUE,
	"PASSWORD" VARCHAR2(255) NOT NULL,
	"HASH" VARCHAR2(255),
	"START_DATE" DATE,
	"END_DATE" DATE,
);

INSERT INTO HR.USERS (
	USER_ID,
	NAME,
	EMAIL,
	USERNAME,
	PASSWORD,
	START_DATE
) VALUES (
	(SELECT NVL(MAX(USER_ID), 0)+1 FROM HR.USERS),
	'User Test',
	'user@domain.com',
	'test',
	'$2a$08$SGVJ5WrkVWpCFj5GY5184uGP3yVtO3fbYQnFDtHb9Am6wDZnotxfS',
	SYSDATE
);

COMMIT;