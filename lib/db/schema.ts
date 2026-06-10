import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  githubId: text("github_id").unique().notNull(),
  username: text("username").notNull(),
  name: text("name"),
  email: text("email"),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const collections = pgTable("collections", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  name: text("name").notNull(),
  description: text("description"),
  isPublic: boolean("is_public").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const collectionRepos = pgTable("collection_repos", {
  id: serial("id").primaryKey(),
  collectionId: integer("collection_id").references(() => collections.id),
  repoFullName: text("repo_full_name").notNull(),
  repoId: integer("repo_id"),
  notes: text("notes"),
  addedAt: timestamp("added_at").defaultNow(),
});