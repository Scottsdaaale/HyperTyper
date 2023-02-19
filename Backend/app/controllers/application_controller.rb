

class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
  puts "scotty"
  


  puts "Mike"
  puts "Main"


  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/words" do 
    Word.all.shuffle.to_json
  end

  get "/users" do
    User.all.to_json
  end

  post "/users" do
    User.create(username: params[:username], password: params[:password])
  end

  get "/users/:id" do
    got_user = User.find_by_id( params[:id] )

    got_user.to_json(includes: :results)
  end

patch '/users/:id' do 
  binding.pry
  edited_user=User.find_by_id( params[:id])
  edited_user.username = params[:username]
  edited_user.password = params[:password]
  
  edited_user.save

  edited
end

  
delete '/users/:id' do 
    delete_user = User.find_by_id(params[:id])

    delete_user.destroy
    {message: "User Deleted"}.to_json
end

  post "/login" do
    userToLogin = User.find_by(username: params[:username])
    if userToLogin

    if(userToLogin.password == params[:password])
      return userToLogin.to_json(include: :results)
    else
      return {message: "Incorrect Password"}.to_json
    end
    
    else 
      return {message: "Username does not exist"}.to_json
    end
  end

  post "/results" do 

    Result.create(words_per_minute: params[:wpmResults], date: params[:newDate], user_id: params[:user_id]).to_json
    # binding.pry
  end

  get "/results" do 
    Result.all.to_json
  end

end
