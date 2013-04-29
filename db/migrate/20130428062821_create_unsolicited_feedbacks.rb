class CreateUnsolicitedFeedbacks < ActiveRecord::Migration
  def change
    create_table :unsolicited_feedbacks do |t|
      t.integer :author_id, null: false
      t.integer :recipient_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :unsolicited_feedbacks, :author_id
    add_index :unsolicited_feedbacks, :recipient_id
  end
end
