BEGIN;

DROP TABLE IF EXISTS "task";

CREATE TABLE IF NOT EXISTS "task" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "position" integer NOT NULL DEFAULT 0,
    "color" TEXT NOT NULL DEFAULT '#FFFFFF',
    "finished" BOOLEAN NOT NULL DEFAULT 'FALSE',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);
-- random cards to test --
INSERT INTO "task" ("name") VALUES
('testTask 1'),
('testTask 2'),
('testTask 3'),
('testTask 4');

COMMIT;