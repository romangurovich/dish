class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :voter_id
      t.integer :comment_id
      t.boolean :positive

      t.timestamps
    end

    add_index :votes, [:voter_id, :comment_id], unique: true
  end
end
