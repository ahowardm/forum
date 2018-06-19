class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new user_params
    if @user.save
      redirect_to @user, notice: "User created successfully."
    else
      redirect_to users_path, alert: "Unable to create user."
    end
  end

  def user_params
    user_params = params.require(:user).permit(:id, :first_name, :last_name, :email)
  end
end
