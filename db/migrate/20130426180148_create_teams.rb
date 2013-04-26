class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.integer :owner_id
      t.string :name
      t.text :description
      t.integer :karma, default: 0

      t.timestamps
    end

    add_index :teams, :owner_id
    add_index :teams, :name
    add_index :teams, :karma
  end
end
