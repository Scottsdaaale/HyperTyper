class CreateResults < ActiveRecord::Migration[6.1]
  def change
    create_table :results do |t|

      t.integer :words_per_minute
      
      t.string :date

      t.integer :user_id
      

    end
  end
end
