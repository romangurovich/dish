class UsersController < ApplicationController
	respond_to :json
	respond_to :html, only: [:index]

	def index
		@users = User.all

		respond_to do |format|
			format.json { render json: @users }
			format.html { render :index }
		end
	end

	def show
		@user = User.find(params[:id])
		render json: @user
	end

	def create
		@user = User.new(params[:user])

		if @user.save
			render json: @user
		else
			render json: @user.errors, status: 422
		end
	end 
end
