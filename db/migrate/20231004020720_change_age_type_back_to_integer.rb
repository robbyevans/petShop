class ChangeAgeTypeBackToInteger < ActiveRecord::Migration[7.0]
  def up
    change_column :pets, :age, 'integer USING age::integer'
  end

  def down
    change_column :pets, :age, :string
  end
end
