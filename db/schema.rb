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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130502180905) do

  create_table "feedback_requests", :force => true do |t|
    t.integer  "requestor_id", :null => false
    t.integer  "team_id",      :null => false
    t.text     "body",         :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "feedback_requests", ["requestor_id"], :name => "index_feedback_requests_on_requestor_id"
  add_index "feedback_requests", ["team_id"], :name => "index_feedback_requests_on_team_id"

  create_table "memberships", :force => true do |t|
    t.integer  "member_id",  :null => false
    t.integer  "team_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "memberships", ["member_id"], :name => "index_memberships_on_member_id"
  add_index "memberships", ["team_id"], :name => "index_memberships_on_team_id"

  create_table "solicited_feedbacks", :force => true do |t|
    t.integer  "author_id",                          :null => false
    t.integer  "feedback_request_id",                :null => false
    t.text     "body"
    t.integer  "karma",               :default => 0
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
  end

  add_index "solicited_feedbacks", ["author_id"], :name => "index_solicited_feedbacks_on_author_id"
  add_index "solicited_feedbacks", ["feedback_request_id"], :name => "index_solicited_feedbacks_on_feedback_request_id"
  add_index "solicited_feedbacks", ["karma"], :name => "index_solicited_feedbacks_on_karma"

  create_table "teams", :force => true do |t|
    t.integer  "owner_id"
    t.string   "name"
    t.text     "description"
    t.integer  "karma",       :default => 0
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
  end

  add_index "teams", ["karma"], :name => "index_teams_on_karma"
  add_index "teams", ["name"], :name => "index_teams_on_name"
  add_index "teams", ["owner_id"], :name => "index_teams_on_owner_id"

  create_table "unsolicited_feedbacks", :force => true do |t|
    t.integer  "author_id",    :null => false
    t.integer  "recipient_id", :null => false
    t.text     "body",         :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "unsolicited_feedbacks", ["author_id"], :name => "index_unsolicited_feedbacks_on_author_id"
  add_index "unsolicited_feedbacks", ["recipient_id"], :name => "index_unsolicited_feedbacks_on_recipient_id"

  create_table "users", :force => true do |t|
    t.string   "username"
    t.integer  "karma",               :default => 0
    t.string   "email"
    t.string   "password"
    t.string   "remember_token"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
    t.string   "nickname"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["karma"], :name => "index_users_on_karma"
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

  create_table "votes", :force => true do |t|
    t.integer  "voter_id",                                :null => false
    t.integer  "solicited_feedback_id",                   :null => false
    t.boolean  "positive",              :default => true
    t.datetime "created_at",                              :null => false
    t.datetime "updated_at",                              :null => false
  end

  add_index "votes", ["voter_id", "solicited_feedback_id"], :name => "index_votes_on_voter_id_and_solicited_feedback_id", :unique => true

end
