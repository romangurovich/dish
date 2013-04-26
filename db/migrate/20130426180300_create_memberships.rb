class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.integer :member_id
      t.integer :team_id

      t.timestamps
    end

    add_index :memeberships, :member_id
    add_index :memeberships, :team_id
  end
end
