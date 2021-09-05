class Post < ApplicationRecord
  belongs_to :user
  #active storage rails 5
  has_one_attached :thumbnail
  has_one_attached :banner
  #Active text rails 6
  has_rich_text :body

  #Add validates for post title and body
  validates :title, length: { minimum: 5 }
  validates :body, length: { minimum: 25 }
  def optimized_image(image, x, y)
    return image.variant(resize_to_fill: [x, y]).processed
  end  
end
