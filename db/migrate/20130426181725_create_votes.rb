class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false
      t.integer :solicited_feedback_id, null: false
      t.boolean :positive, default: true

      t.timestamps
    end

    add_index :votes, [:voter_id, :solicited_feedback_id], unique: true
  end
end
