import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Modules = new Mongo.Collection('modules');

// Category schema definition
const Category = new SimpleSchema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  moduleUrl: { type: String, required: true }
});

// Relation of Categories that are schemas
Modules.schema = new SimpleSchema({
  Development: { type: Category },
  Test: { type: Category },
  Debugging: { type: Category },
  Data: { type: Category },
  Connection: { type: Category },
  Templating: { type: Category }
});
