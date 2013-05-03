class UsersController < ApplicationController
	respond_to :json
	respond_to :html, only: [:index, :new]

	def index
		@users = User.pluck(:username)

		respond_to do |format|
			format.json { render json: @users }
			format.html { render :index }
		end
	end

	def new
		@user = User.new
	end

	def show
		@user = User.find(params[:id])
		render json: @user
	end

	def create
		@user = User.new(params[:user])

		if @user.save
			login(@user.username, @user.password)
			redirect_to root_url
		else
			flash.now[:error] = @user.errors.full_messages
			render :new
		end
	end

	def trusted_people
		@user = User.find(params[:id])
		render json: @user.trusted_people
	end

end
