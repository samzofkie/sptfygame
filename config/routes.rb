Rails.application.routes.draw do
  root 'entrances#index'
  get '/main', to: 'main#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
