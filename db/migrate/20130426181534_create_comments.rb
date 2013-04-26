class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author_id
      t.string :post_id
      t.text, :body
      t.integer :karma, default: 0

      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :post_id
    add_index :comments, :karma
  end
end
