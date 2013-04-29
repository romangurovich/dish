class CreateFeedbackRequests < ActiveRecord::Migration
  def change
    create_table :feedback_requests do |t|
      t.integer :requestor_id, null: false
      t.integer :team_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :feedback_requests, :requestor_id
    add_index :feedback_requests, :team_id
  end
end
