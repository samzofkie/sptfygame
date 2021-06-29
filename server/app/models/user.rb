class User < ApplicationRecord
  has_secure_token :access_token
  has_secure_token :refresh_token
end
