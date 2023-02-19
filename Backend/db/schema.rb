# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_19_135639) do

  create_table "results", force: :cascade do |t|
    t.integer "words_per_minute"
    t.string "date"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
  end

  create_table "words", force: :cascade do |t|
    t.string "word"
  end

end
