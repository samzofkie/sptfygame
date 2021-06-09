require 'digest'
require 'securerandom'
require 'base64'


class AuthUriConstructor

  @@client_id = ENV['CLIENT_ID']
  @@redirect_uri = ENV['REDIRECT_URI']

  def initialize
    verifier = SecureRandom.alphanumeric(100)
    @challenge = Base64.urlsafe_encode64(
                 Digest::SHA2.new(256).hexdigest( verifier ), padding: false )
    @query_params = { 'client_id' => @@client_id,
                      'response_type' => 'code',
                      'redirect_uri' => @@redirect_uri,
                      'code_challenge_method' => 'S256', 
                      'code_challenge' => @challenge }
    @auth_uri = 'https://accounts.spotify.com/authorize?' 
    @query_params.each do |key, value| 
      @auth_uri += "#{key}=#{value}&"     
    end 
    @auth_uri = @auth_uri.delete_suffix('&') 
  end
  
  attr_reader :auth_uri

end


class EntrancesController < ApplicationController
  def index
    #@auth_uri = AuthUriConstructor.new.auth_uri
  end
end
