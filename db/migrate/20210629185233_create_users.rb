class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.primary_key :id
      t.string :code_verifier, limit: 128
      t.string :code_challenge, limit: 64
      t.string :access_token
      t.time :access_expiration
      t.string :refresh_token

      t.timestamps
    end
    add_index :users, :access_token, unique: true
    add_index :users, :refresh_token, unique: true
    add_index :users, :id, unique: true
  end
end
