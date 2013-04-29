class CreateSolicitedFeedbacks < ActiveRecord::Migration
  def change
    create_table :solicited_feedbacks do |t|
      t.integer :author_id, null: false
      t.integer :feedback_request_id, null: false
      t.text :body
      t.integer :karma, default: 0

      t.timestamps
    end

    add_index :solicited_feedbacks, :author_id
    add_index :solicited_feedbacks, :feedback_request_id
    add_index :solicited_feedbacks, :karma
  end
end
