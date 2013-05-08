class UsersController < ApplicationController
	skip_before_filter :require_login, only: [:new, :create]

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

	def edit
		@user = current_user
	end

	def show
		@user = User.find(params[:id])
		render json: @user.to_json(:methods => [:avatar_url])
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

	def update
		@user = current_user
		@user.assign_attributes(params[:user])

		if @user.save
			flash[:notice] = "Updated your details, #{@user.username}"
			redirect_to root_url
		else
			flash.now[:error] = @user.errors.full_messages
			render :edit
		end
	end

	def trusted_people
		@user = User.find(params[:id])
		render json: @user.trusted_people
	end

end
