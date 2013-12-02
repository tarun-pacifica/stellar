# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131127111134) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "flights", force: true do |t|
    t.string   "call_sign"
    t.string   "origin"
    t.string   "destination"
    t.integer  "plane_id"
    t.date     "date_departed"
    t.time     "time_departed"
    t.date     "date_arrived"
    t.time     "time_arrived"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "passengers", force: true do |t|
    t.string   "name"
    t.string   "contact_number"
    t.string   "nationality"
    t.string   "meal_pref"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "planes", force: true do |t|
    t.string   "name"
    t.integer  "rows"
    t.integer  "columns"
    t.integer  "aisles"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "reservations", force: true do |t|
    t.integer  "flight_id"
    t.integer  "passenger_id"
    t.string   "seat_name"
    t.string   "seat_pref"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
