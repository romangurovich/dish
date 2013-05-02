class SessionsController < ApplicationController
	def new

	end

	def create
		if login(params["user"]["username"], params["user"]["password"])
			flash[:notice] = "Welcome #{current_user.username}"
			redirect_to root_url
		else
			flash[:error] = "Wrong username or password"
			render :new
		end
	end

	def destroy
		logout
		redirect_to hello_url
	end
end
