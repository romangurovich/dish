class RemoveAliasFromUsers < ActiveRecord::Migration
  def up
  	remove_column :users, :alias
  	add_column :users, :nickname, :string
  end

  def down
  	add_column :users, :alias, :string
  	remove_column :users, :nickname
  end
end
