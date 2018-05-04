Rails.application.routes.draw do
  root to: "pages#root"

  namespace "api" do
    namespace "v1" do
      resources :contacts

      get "/contacts", to: "contacts#index"

      post "/contacts", to: "contacts#create"
    end
  end
end
