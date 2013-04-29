require 'SecureRandom'
module SessionsHelper
	def login(username, password)
		user = User.find_by_username(username)

		if user && user.password == password
			user.remember_token = SecureRandom.base64(12)
			user.save!
			session[:remember_token] = user.remember_token
			true
		else
			false
		end
	end


	def current_user
		return @current_user = nil unless session[:remember_token]
		@current_user ||= User.find_by_remember_token(session[:remember_token])
	end

	def logout
		session[:remember_token] = nil
		@current_user = nil
	end

	def logged_in?
		not current_user.nil?
	end
end
